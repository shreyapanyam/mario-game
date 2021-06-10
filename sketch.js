var mario, marioIMG, marioIMG2;
var ground, Background, backgroundIMG;
var coronavirus, coronavirusIMG;
var handsanitizer, handsanitizerIMG;
var mask, maskIMG;


function preload() {
  marioIMG = loadImage("images/mario_standing_removed.png");
  marioIMG2 = loadImage("images/mario_standing_removed.png","images/mario_removed.png");

  backgroundIMG = loadImage("images/Background.png");

  coronavirusIMG = loadImage("images/coronavirus_removed.png");

  handsanitizerIMG = loadImage("images/Handsanitizer_removed.png");

  maskIMG = loadImage("images/mask_removed.png");
  
}

function setup() {
  createCanvas(600,400);
  
  coronavirusGroup = createGroup();
  handsanitizerGroup = createGroup();
  maskGroup = createGroup();

  Background = createSprite(300, 100, 800, 350);
  Background.addImage(backgroundIMG);
  Background.scale = 0.68;

  Background.velocityX = -3;

  mario = createSprite(50, 270, 20, 50);
  mario.addImage(marioIMG);
  mario.scale = 0.1;
  console.log(mario.depth);
  ground = createSprite(200, 300, 500, 10);
  mario.debug = true;
  ground.debug = true;


  
}

function draw() {
  background("lightgray");  

  if (Background.x < 0) {
    Background.x = 300;
  }

  mario.collide(ground);

  console.log(Background.x);

  spawnCoronavirus();
  spawnHandsanitizer();
  spawnMask();

  drawSprites();
}

function spawnCoronavirus() {
  if (frameCount % 60 === 0) {
    coronavirus = createSprite(100, 220, 10, 10);
    coronavirus.addImage(coronavirusIMG);
    coronavirus.scale = 0.1;
    coronavirus.y = Math.round(random(70, 130));
    coronavirus.velocityX = -4;
    coronavirusGroup.add(coronavirus);
  }
}

function spawnHandsanitizer() {
  if (frameCount % 80 === 0) {
    handsanitizer = createSprite(120, 240, 10, 10);
    handsanitizer.addImage(handsanitizerIMG);
    handsanitizer.scale = 0.1;
    handsanitizer.y = Math.round(random(80, 120));
    handsanitizer.velocityX = -4;
    handsanitizerGroup.add(handsanitizer);
  }
}

function spawnMask() {
  if (frameCount % 70 === 0) {
    mask = createSprite(110, 230, 10, 10);
    mask.addImage(maskIMG);
    mask.scale = 0.1;
    mask.y = Math.round(random(90, 150));
    mask.velocityX = -4;
    maskGroup.add(mask);
  }
}

