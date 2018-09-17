'use strict';


let game = $('#game-area');
let area = game[0].getContext("2d");

let hero = new Object();

hero.name = 'Hero';
hero.maxHealth = 3;
hero.health = 3;
hero.speed = 5;
hero.damage = 10;
hero.src = document.getElementById('hero-sprite');
hero.xPos = 20;
hero.yPos = 20;
hero.width = 20;
hero.height = 20;

$(document).keypress(function (e) {
    console.log(e.which);
    if ((e.which == 119 || e.which == 1094) && hero.yPos > 1) {
        hero.yPos -= hero.speed;
    }
    if ((e.which == 115 || e.which == 1099) && hero.yPos < 129) {
        hero.yPos += hero.speed;
    }
    if ((e.which == 100 || e.which == 1074) && hero.xPos < 279) {
        hero.xPos += hero.speed;
    }
    if ((e.which == 97 || e.which == 1092) && hero.xPos > 1) {
        hero.xPos -= hero.speed;
    }
});

let block = new Object()
block.xPos = 50;
block.yPos = 50;
block.width = 80;
block.height = 80;

function draw() {
    //last drawing has biggest z-index of element

    //background
    area.fillStyle = 'white';
    area.fillRect(0, 0, 1000, 1000);
    //block
    area.fillStyle = 'black';
    area.fillRect(block.xPos, block.yPos, block.width, block.height);
    //hero
    area.drawImage(hero.src, hero.xPos, hero.yPos, hero.width, hero.height);

    requestAnimationFrame(draw);
    // requestAnimationFrame(touch(hero, block));
}


draw();

function touch() {
    //this function check touch
   if (
       (
           (hero.xPos + hero.width) > block.xPos &&
           (hero.xPos + hero.width) < (block.xPos + block.width) &&
           (hero.yPos + hero.height) > block.yPos &&
           (hero.yPos + hero.height) < (block.yPos + block.height)
       ) || (
           (hero.xPos) > block.xPos &&
           (hero.xPos) < (block.xPos + block.width) &&
           (hero.yPos) > block.yPos &&
           (hero.yPos) < (block.yPos + block.height)
       ) || (
           (hero.xPos + hero.width) > block.xPos &&
           (hero.xPos + hero.width) < (block.xPos + block.width) &&
           (hero.yPos) > block.yPos &&
           (hero.yPos) < (block.yPos + block.height)
       ) || (
           (hero.xPos) > block.xPos &&
           (hero.xPos) < (block.xPos + block.width) &&
           (hero.yPos + hero.height) > block.yPos &&
           (hero.yPos + hero.height) < (block.yPos + block.height)
       )
   ) {
       $('.info').text('TOUCH');
   } else {
       $('.info').text('');
   }
}

setInterval(touch, 100);