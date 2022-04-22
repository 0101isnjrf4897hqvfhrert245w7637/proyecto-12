var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var edges;


function preload(){
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 pathImg = loadImage("path.png");
 boyImg =  loadAnimation("jake4.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path =createSprite(200,200,50,100);
path = addImage("pathImg");
path.x = path.With/2;
path.velocityY = -5;
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprites(100,100,25,100)
boy = addAnimation("Runner-1png");
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo


//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  console.log(phat.x)
  if(path.x<0)
  {

path.x = path.With/2;

  }

  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 

  if(keyDown("Rigth")){

 boy.velocityY = 3;
 
  }

if(keyDown("Left")){

boy.velocityY = -3;

}

  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
boy.collide(leftBoundary);

boy.collide(rightBoundary);

  drawSprites();

}
