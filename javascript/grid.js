// 30 x 20

// CELL VALUES
//  -1: Wall; unmovable
//   0: Empty
//  1+: Player

class grid_obj{
    constructor(hex_r,hex_a,width=30,height=20,building=[4,3,8,6]){
        this.grid = [];
        this.coords = [];
        const [bx, by, bw, bh] = building;
        this.width = width;
        this.height = height
        for (let y=0;y<height;y++){
            let row  = [];
            let row0 = [];
            for (let x=0;x<width;x++){
                row.push(
                    (y === 0 || x === 0 || y === height - 1 || x === width - 1 ||
                        (x >= bx && x < bx + bw && y >= by && y < by + bh) ||
                        (x >= width - bx - bw && x < width - bx && y >= by && y < by + bh) ||
                        (x >= bx && x < bx + bw && y >= height - by - bh && y < height - by) ||
                        (x >= width - bx - bw && x < width - bx && y >= height - by - bh && y < height - by)
                    ) ? -1 : 0
                );
                row0.push([0,0]);
            }
            this.grid.push(row);
            this.coords.push(row0);
        }
        this.hex_r = hex_r;
        this.hex_a = hex_a;
    }

    get(x,y){
        return this.grid[y][x];
    }

    draw(render,sx=0,sy=0,colors = {"-1":"grey","0":"white","1":"blue"}){
        // let last_point;
        const hex_r = this.hex_r;
        const hex_a = this.hex_a;
        for (let j = 0; j < grid.height; j++){
            let x = hex_r                                   + sx;
            let y = hex_r - (2 * hex_r * Math.sin(hex_a))*j + sy;
            for (let i = 0; i < grid.width; i++){
                render.draw_hexagon(x,y,hex_r,(colors[grid.get(i,j)]));
                // last_point = [x,y];
                this.coords[j][i] = [x,y]
                x+=hex_r*(1+Math.cos(hex_a));
                y+=(-1)**i * hex_r * Math.sin(hex_a);
            }
        }
        return [this.coords[this.height-1][this.width-1]];
    }

    set_world(x,y,new_val){
        const r = (hex_r - 5)**2;
        for (let iy = 0; iy < this.height; iy++){
            for (let ix = 0; ix < this.width; ix++){
                if ((x-this.coords[iy][ix][0])**2 + (y-this.coords[iy][ix][1])**2 <= r){
                    this.grid[iy][ix] = new_val;
                    return true;
                }
            }
        }
        return false;
    }
}