const colors = {
    "-1": "grey",
    "0" : "white",
    "1" : "red",
    "2" : "green",
    "3" : "blue",
    "4" : "yellow"
}

const hex_r = 45;
const hex_a = Math.PI / 3;

const render = new render_obj("main");
const grid = new grid_obj(hex_r, hex_a);

var cur_zoom = 0;

var clicked = false;
var click_point = [0,0];

render.canvas.addEventListener("mousedown", (e) => {
    const rect = render.canvas.getBoundingClientRect();

    const scaleX = render.canvas.width / rect.width;
    const scaleY = render.canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    clicked = true;
    click_point = [x, y];
    // console.log("click at", click_point);
});

var player_count = 4;
var players = player_list(player_count);
var cur_player = 0;
var extra_turns = 0;

var cur_question = trivia[trivia_indexes[trivia_index]];
var answering = false;
// 0 = answering, 1 = correct, 2 = incorrect
var trivia_state = 0;
var trivia_allowed = false;
var trivia_answered = false;

var zoom_point = {x:0,y:0};
var nx = 0, ny = 0;

function test_zoom(x,y){
    cur_zoom = -2;
    render.set_camera_desired(x,y);
    zoom_point = {x:x,y:y};
}

function draw_menu(state){
    let current_player = players[cur_player];
    render.draw_rect(20,200,200,300);
    render.draw_hexagon_camera(40,225,10,colors[current_player.id]);
    render.draw_text(55,232,"'s  turn");
    if (current_player.turns === 0){
        render.draw_text(30,270,"Play anywhere");
    } else {
        render.draw_text(30,270,"Play next to one of");
        render.draw_text(30,290,"your spaces");
    }

    if (extra_turns > 0){
        render.draw_text(30,310,`Extra turns: ${extra_turns}`);
    }

    if (current_player.turns > 0 && !trivia_answered){
        render.draw_rect(40,420,160,40);
        render.draw_text(60,447,"Answer trivia");
        trivia_allowed = true;
    } else {
        trivia_allowed = false;
    }
}

function draw_trivia(){
    render.draw_rect(100,200,1000,300);
    if (trivia_state === 0){
        render.draw_text(125,250,cur_question.question);
        render.draw_rect(125,300,450,40);
        render.draw_text(150,325,cur_question.choices[0]);
        render.draw_rect(625,300,450,40);
        render.draw_text(650,325,cur_question.choices[1]);
        render.draw_rect(125,400,450,40);
        render.draw_text(150,425,cur_question.choices[2]);
        render.draw_rect(625,400,450,40);
        render.draw_text(650,425,cur_question.choices[3]);
    } else if (trivia_state === 1){
        render.draw_text(125,250,"Correct!");
        render.draw_text(125,350,`Your prize is: ${extra_turns} extra turns!`);
        render.draw_text(125,450,"Click to continue...");
    } else if (trivia_state === 2){
        render.draw_text(125,250,"Incorrect!");
        render.draw_text(125,350,"The correct answer was: "+cur_question.answer);
        render.draw_text(125,450,"Click to continue...");
    }
}

function handle_trivia(answer){
    trivia_answered = true;
    if (answer === cur_question.answer){
        trivia_state = 1;
        extra_turns += Math.ceil(Math.random()*3);
    } else {
        trivia_state = 2;
        cur_player = (cur_player+1)%player_count;
    }
}

function inside_rect(x,y,rx,ry,rw,rh){
    return x>=rx&&x<=rx+rw&&y>=ry&&y<=ry+rh;
}

function main_loop(now){
    render.clear();
    render.tick_camera();

    // draw hexagon grid
    let [last_point] = grid.draw(render,colors);

    if (cur_zoom === -1){
        render.set_camera_desired(0,0,1);
    }
    else if (cur_zoom === 0){
        render.set_camera_desired(Math.floor(last_point[0]/2),Math.floor(last_point[1]/2),0.4);
    }
    else if (cur_zoom === 1){
        // let view_rect  = render.view_rect();
        zoom_point = players[cur_player].get_camera_view();
        // let zoom_point = players[cur_player].get_camera_view(view_rect[2],view_rect[3]);
        // [nx,ny] = render.world_to_camera(zoom_point.x,zoom_point.y);
        render.set_camera_desired(zoom_point.x,zoom_point.y,zoom_point.zoom);
    }
    // render.draw_circle(zoom_point.x,zoom_point.y,45,"orange");
    if(answering){
        draw_trivia();
    } else {
        draw_menu();
    }

    let world_point = render.camera_to_world(click_point[0],click_point[1]);
    if (clicked){
        // console.log(world_point);
        if (answering){
            if (trivia_state === 0){
                if (inside_rect(click_point[0],click_point[1],125,300,450,40)){
                    handle_trivia(cur_question.choices[0]);
                } else if (inside_rect(click_point[0],click_point[1],625,300,450,40)){
                    handle_trivia(cur_question.choices[1]);
                } else if (inside_rect(click_point[0],click_point[1],125,400,450,40)){
                    handle_trivia(cur_question.choices[2]);
                } else if (inside_rect(click_point[0],click_point[1],625,400,450,40)){
                    handle_trivia(cur_question.choices[3]);
                }
            } else {
                answering = false;
                trivia_answered = false;
            }
        }
        else if (inside_rect(click_point[0],click_point[1],20,200,200,300)){
            if (inside_rect(click_point[0],click_point[1],40,420,160,40)){
                cur_question = get_trivia();
                answering=true;
                trivia_state = 0;
            }
        }
        else {
            console.log("click for player",cur_player);
            let collide;
            let point;
            let res;
            if (players[cur_player].turns === 0 ){
                res = grid.set_world(world_point[0],world_point[1],players[cur_player].id);
            } else {
                res = grid.play(world_point[0],world_point[1],players[cur_player].id);
            }
            collide = res.collided;
            point = res.point;
            console.log("result",res);
            console.log("Click collided:",collide);
            console.log(point);
            if (collide) {
                // if (cur_player === player_count-1 && players[cur_player].turns > 1){
                //     cur_zoom = 1;
                // }
                players[cur_player].change_zoom(point);
                players[cur_player].turns++;
                if (extra_turns <= 0) {cur_player = (cur_player+1) % player_count}
                else {extra_turns--}
                trivia_answered = false;
            };
        }
    }

    
    window.requestAnimationFrame(main_loop);
    clicked = false;
}

main_loop(0);