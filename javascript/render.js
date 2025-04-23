class render_obj {
    constructor(id,background_color="black"){
        this.canvas = document.getElementById(id);
        this.ctx    = this.canvas.getContext("2d");
        this.rect   = this.canvas.getBoundingClientRect();
        // ...
        this.width  = this.canvas.width;
        this.height = this.canvas.height;
        this.background_color = background_color;

        this.camera_x = 0;
        this.camera_y = 0;
        this.camera_zoom = 1;

        this.camera_dx = 0;
        this.camera_dy = 0;
        this.camera_dzoom = 1;
    }

    clear() {
        // this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = this.background_color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    draw_circle(x,y,r,color="white"){
        this.ctx.fillStyle   = color;
        this.ctx.strokeStyle = color;

        let point = this.world_to_camera(x,y);

        this.ctx.beginPath();
        this.ctx.arc(point[0], point[1], r * this.camera_zoom, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    draw_hexagon(x_w,y_w,r,fill="white",border="grey"){
        this.ctx.fillStyle   = fill;
        this.ctx.strokeStyle = border;

        const a = Math.PI / 3;
        let point = this.world_to_camera(x_w,y_w);
        let x = point[0], y=point[1];

        this.ctx.beginPath()
        for (let i = 0; i < 6; i++){
            this.ctx.lineTo(x + r * Math.cos(a * i) * this.camera_zoom, y + r * Math.sin(a * i) * this.camera_zoom);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    set_camera(x, y, camera_zoom=this.camera_zoom) {
        this.camera_x     = x || 0;
        this.camera_y     = y || 0;
        this.camera_zoom  = camera_zoom || 0.4;
        this.camera_dx    = x || 0;
        this.camera_dy    = y || 0;
        this.camera_dzoom = camera_zoom || 0.4;
    }

    set_camera_desired(x,y,camera_zoom=this.camera_zoom){
        this.camera_dx    = x;
        this.camera_dy    = -y;
        this.camera_dzoom = camera_zoom;
    }

    tick_camera(dt=1){
        this.camera_x += (this.camera_dx - this.camera_x) * 0.2 * dt;
        this.camera_y += (this.camera_dy - this.camera_y) * 0.2 * dt;
        this.camera_zoom += (this.camera_dzoom - this.camera_zoom) * 0.2 * dt;
        this.camera_zoom = this.camera_zoom || 0.4;
    }

    world_to_camera(x, y) {
        return [
            (x - this.camera_x) * this.camera_zoom + Math.floor(this.width / 2),
            (-y - this.camera_y) * this.camera_zoom + Math.floor(this.height / 2)
        ];
    }

    camera_to_world(u, v){
        return [
            (u - Math.floor(this.width / 2)) / this.camera_zoom + this.camera_x,
            ((v - Math.floor(this.height / 2)) / this.camera_zoom + this.camera_y)*-1
        ];
    }
}