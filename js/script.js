let troll;
let pog;

function preload(){
    troll = loadImage("img/troll.png");
    pog = loadImage("img/pog.jpg");
}

game = {
    speed: 25,
    size: 50
}
player = {
    y: 2
}

gameOver = false;

projectiles = [];

for(i=0;i<game.size;i++){
    projectiles.push([-300 * i, Math.floor(Math.random() * 5)])
}

function setup(){
    createCanvas(1000, 500);
    stroke(1);
}

function draw(){
    if(!gameOver){
        clear();
        image(pog, 200, player.y * 100, 100, 100);

        projectiles.forEach((e, i)=>{
            image(troll, 1000 - e[0], e[1] * 100, 100, 100);
            e[0]+=game.speed;
            if(e[1] == player.y && 1000 - e[0] < 300 && 1000 - e[0] > 200){
                gameOver = true;
                alert("YOU LOSE");
                location.reload();
            }
            
            if(i == projectiles.length-1 && 1000 - e[0] == -100){
                alert("YOU WIN");
                location.reload();
            }
        });
    } 
}

document.body.addEventListener("keydown", e=>{
    if(e.key == "w" && player.y > 0){
        player.y--;
    }
    if(e.key == "s" && player.y < 4){
        player.y++;
    }
})