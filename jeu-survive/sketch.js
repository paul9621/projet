let posX=30;
let posY=30;
let posmaxX=640;
let posmaxY=480;
let diametre=20;
let posobstacleX=150;
let posobstacleY=200;
let diametreobstacle=69;
let direction=1;
let posXevil=80;
let posYevil=300;
let diametreevil=96;
let temps=0;
let directionevil=1;
let stop=1;
let button;

function setup(){
    createCanvas(posmaxX, posmaxY);

}

function draw(){
    background(255,204,0);
    fill(color(0,0,0));
    circle(posX,posY,diametre);
    testOutOfScreen();
    circle (posXevil,posYevil,diametreevil)
    circle(posobstacleX,posobstacleY,diametreobstacle)
    fill(color(255,0,0));
    bougeobsctable();
    testCollision();
    bougeevil();
    testOutOfScreenobstacle();
}

function UpdatePositionCercle()
{   if(keyIsDown(RIGHT_ARROW))
    {
    posX++;
    posX++;
    }
    if(keyIsDown(LEFT_ARROW))
    {
    posX--;
    posX--;
    }
if(keyIsDown(UP_ARROW))
    {
    posY--;
    posY--;
    }
if(keyIsDown(DOWN_ARROW))
    {
    posY++;
    posY++;
    }
}
function testOutOfScreen()
{
    if (posX<0+diametre/2)
    {
      posX=0+diametre/2;
        // Named SVG/CSS color string
stroke('red');
strokeWeight(4);
line(0,0,0,posmaxY);
describe('White rect at center with red outline.');
    }
    if (posX>posmaxX-diametre/2)
    {
        posX=posmaxX-diametre/2;
        // Named SVG/CSS color string
stroke('red');
strokeWeight(4);
line(posmaxX,0,posmaxX,posmaxY);
describe('White rect at center with red outline.');
    }
    if (posY<diametre/2)
    {
        posY=0+diametre/2;
        // Named SVG/CSS color string
stroke('red');
strokeWeight(4);
line(0,0,posmaxX,0);
describe('White rect at center with red outline.');
    }
    if (posY>posmaxY-diametre/2)
    {
        posY=posmaxY-diametre/2;
        // Named SVG/CSS color string
stroke('red');
strokeWeight(4);
line(0,posmaxY,posmaxX,posmaxY);
describe('White rect at center with red outline.');
    }    
}
function testOutOfScreenobstacle()
{   if (posXevil<0+diametreevil/2)
{
  posXevil=0+diametreevil/2;
    // Named SVG/CSS color string
    directionevil=directionevil*(-1);
}
    if (posobstacleX<0+diametreobstacle/2)
    {
      posobstacleX=0+diametreobstacle/2;
        // Named SVG/CSS color string
        direction=direction*(-1);
    }
    if (posXevil>posmaxX-diametreevil/2)
    {
        posXevil=posmaxX-diametreevil/2;
        // Named SVG/CSS color string
        directionevil=directionevil*(-1);
    }
    if (posobstacleX>posmaxX-diametreobstacle/2)
    {
        posobstacleX=posmaxX-diametreobstacle/2;
        // Named SVG/CSS color string
        direction=direction*(-1);
    }
    if (posYevil<diametreevil/2)
    {
        posYevil=0+diametreevil/2;
        // Named SVG/CSS color string
        directionevil=directionevil*(-1);
    }
    if (posobstacleY<diametreobstacle/2)
    {
        posobstacleY=0+diametreobstacle/2;
        // Named SVG/CSS color string
        direction=direction*(-1);
    }
    if (posYevil>posmaxY-diametreevil/2)
    {
        posYevil=posmaxY-diametreevil/2;
        // Named SVG/CSS color string
        directionevil=directionevil*(-1);
    } 
    if (posobstacleY>posmaxY-diametreobstacle/2)
    {
        posobstacleY=posmaxY-diametreobstacle/2;
        // Named SVG/CSS color string
        direction=direction*(-1);
    }    
}
function bougeevil()
{
    posYevil=posYevil+directionevil;
}
function bougeobsctable()
{
    posobstacleX=posobstacleX+direction;
}
function tempspasse()
{

    temps= round(millis()/1000);
    text(temps,posmaxX/20,50);
    textSize(50);
}
function testCollision()
{ let d = dist(posX, posY, posobstacleX, posobstacleY);
  let devil = dist(posX, posY, posXevil, posYevil);  
     if (d<(diametre+diametreobstacle)/2)
     {
         fill(color(255,0,0));
         circle(posX,posY,diametre);
         circle(posobstacleX,posobstacleY,diametreobstacle);
         text(temps,posmaxX/2, posmaxY/2);
         direction=0;
         directionevil=0;
         const tempsfin=temps;
         text(tempsfin,posmaxX/2,posmaxY/2)
         button = createButton('try again');
         button.position(50, 50);

     }
     else if (devil<(diametre+diametreevil)/2)
     {
         fill(color(255,0,0));
         circle(posX,posY,diametre);
         circle(posXevil,posYevil,diametreevil);
         text(temps,posmaxX/2, posmaxY/2);
         directionevil=0;
         direction=0;
         const tempsfin=temps;
         text(tempsfin,posmaxX/2,posmaxY/2)
         button = createButton('try again');
         button.position(50, 50);
         button.mousePressed()
     }
     else
     {tempspasse();
     UpdatePositionCercle()}
}