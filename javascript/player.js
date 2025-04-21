var cur_id = 1;

class player {
    constructor(){
        this.id    = cur_id++;
        this.turns = 0;
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