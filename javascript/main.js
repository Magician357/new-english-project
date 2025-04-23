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

var zoom_point = {x:0,y:0};
var nx = 0, ny = 0;

function test_zoom(x,y){
    cur_zoom = -2;
    render.set_camera_desired(x,y);
    zoom_point = {x:x,y:y};
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

    let world_point = render.camera_to_world(click_point[0],click_point[1]);
    if (clicked){
        // console.log(world_point);
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
            if (cur_player === player_count-1 && players[cur_player].turns > 1){
                cur_zoom = 1;
            }
            players[cur_player].change_zoom(point);
            players[cur_player].turns++;
            cur_player = (cur_player+1) % player_count
        };
    }

    
    window.requestAnimationFrame(main_loop);
    clicked = false;
}

main_loop(0);