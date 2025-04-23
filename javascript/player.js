var cur_id = 1;

class player {
    constructor(){
        this.id    = cur_id++;
        this.turns = 0;
        this.top_left = [10000, -10000];
        this.bottom_right = [-10000, 10000];
    }
    change_zoom(point) {
        console.log(point);
        if (point[0] < this.top_left[0]) this.top_left[0] = point[0];
        if (point[1] > this.top_left[1]) this.top_left[1] = point[1];
        if (point[0] > this.bottom_right[0]) this.bottom_right[0] = point[0];
        if (point[1] < this.bottom_right[1]) this.bottom_right[1] = point[1];
        console.log("top left",this.top_left);
        console.log("bottom right",this.bottom_right);
    }
    get_camera_view(padding_ratio = 1) {
        const centerX = (this.top_left[0] + this.bottom_right[0]) / 2;
        const centerY = (this.top_left[1] + this.bottom_right[1]) / 2;
    
        // 0.4 fits 30 x 20
        // (45,45) - (2002.5, -1396.9322973010906)
        // 0.4 zoom for 1957.5 by 1441.9322973010906
        let width_zoom = 1957.5/(this.bottom_right[0]-this.top_left[0]) * 0.4             / (1 + padding_ratio * 2);
        let height_zoom= 1441.9322973010906/(this.top_left[1]-this.bottom_right[1]) * 0.4 / (1 + padding_ratio * 2);
        console.log(width_zoom,height_zoom);
    
        return {
            x: centerX,
            y: centerY,
            zoom: Math.max(Math.min(height_zoom,width_zoom), 0.4)
        };
    }
}

function player_list(amount,reset_id=true){
    if (reset_id) cur_id = 1;
    let cur = [];
    for (let i=0;i<amount;i++){
        cur.push(new player());
    }
    return cur;
}