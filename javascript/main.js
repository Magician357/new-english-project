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


function main_loop(now){
    render.clear();
    render.tick_camera();

    // draw hexagon grid
    let [last_point] = grid.draw(render);

    if (cur_zoom === -1){
        render.set_camera_desired(0,0,1);
    }
    else if (cur_zoom === 0){
        render.set_camera_desired(Math.floor(last_point[0]/2),Math.floor(-last_point[1]/2),0.4);
    }

    let world_point = render.camera_to_world(click_point[0],click_point[1]);
    if (clicked){
        // console.log(world_point);
        console.log("Click collided:",grid.set_world(world_point[0],world_point[1],1));
    }

    
    window.requestAnimationFrame(main_loop);
    clicked = false;
}

main_loop(0);