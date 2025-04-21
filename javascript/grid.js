// 30 x 20

// CELL VALUES
//  -1: Wall; unmovable
//   0: Empty
//  1+: Player

class grid_obj{
    constructor(width=30,height=20,building=[4,3,8,6]){
        this.grid = [];
        const [bx, by, bw, bh] = building;
        this.width = width;
        this.height = height
        for (let y=0;y<height;y++){
            let row = []
            for (let x=0;x<width;x++){
                row.push(
                    (y === 0 || x === 0 || y === height - 1 || x === width - 1 ||
                        (x >= bx && x < bx + bw && y >= by && y < by + bh) ||
                        (x >= width - bx - bw && x < width - bx && y >= by && y < by + bh) ||
                        (x >= bx && x < bx + bw && y >= height - by - bh && y < height - by) ||
                        (x >= width - bx - bw && x < width - bx && y >= height - by - bh && y < height - by)
                    ) ? -1 : 0
                );
            }
            this.grid.push(row);
        }
    }

    get(x,y){
        return this.grid[y][x];
    }
}