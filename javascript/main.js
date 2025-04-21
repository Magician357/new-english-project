const render = new render_obj("main");
const grid = new grid_obj();

const hex_r = 45;
const hex_a = 2 * Math.PI / 6;

var cur_zoom = 0;

function main_loop(now){
    render.clear();
    // draw hexagon grid
    let last_point;
    for (let j = 0; j < grid.height; j++){
        let x = hex_r;
        let y = hex_r - (2 * hex_r * Math.sin(hex_a))*j;
        for (let i = 0; i < grid.width; i++){
            render.draw_hexagon(x,y,hex_r,(grid.get(i,j) == -1 ? "grey" : "white"));
            last_point = [x,y];
            x+=hex_r*(1+Math.cos(hex_a));
            y+=(-1)**i * hex_r * Math.sin(hex_a);
        }
    }
    if (cur_zoom === 0){
        render.set_camera(Math.floor(last_point[0]/2),Math.floor(-last_point[1]/2),0.4);
    }

    
    window.requestAnimationFrame(main_loop);
}

main_loop(0);