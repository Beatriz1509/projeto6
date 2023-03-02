var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["41b6b260-382d-4e7a-a478-400e76410a92"],"propsByKey":{"41b6b260-382d-4e7a-a478-400e76410a92":{"name":"diamante","sourceUrl":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png","frameSize":{"x":391,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RIDiuf2PVUAzqFMR4oK5dkuIKcWIK8TS/category_icons/diamond.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ladrao = createSprite(30,370,40,40);
ladrao.shapeColor = "black";


var diamante = createSprite(350,40,30,30);
diamante.setAnimation("diamante");
diamante.scale = 0.2;


var laser1 = createSprite(100,0,200,5);
laser1.shapeColor = "red";
laser1.velocityY = +6;


var laser2 = createSprite(300,400,200,5);
laser2.shapeColor = "red";
laser2.velocityY =-6;



createEdgeSprites();


function draw() {
  background("#E0FFFF");
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  ladrao.bounceOff(edges);

  if (keyDown("up")){
  ladrao.y = ladrao.y -10;
}
  if (keyDown("down")){
  ladrao.y = ladrao.y +10;
}
  
  if (keyDown("right")){
  ladrao.x = ladrao.x +10;
}
  
  if (keyDown("left")){
  ladrao.x = ladrao.x -10;
}
  
  
  
if (laser1.isTouching(ladrao)||laser2.isTouching(ladrao)){
  stroke(0);
  fill(0);
  textSize(24);
  text ("Ladrão capturado",120,200);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  ladrao.setVelocity(0,0);

}

if (ladrao.isTouching(diamante)){
  stroke(0);
  fill(0);
  textSize(24);
  text ("Você ganhou!",120,200);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  ladrao.setVelocity(0,0);
  
}


  
  
  
  
  
  drawSprites();
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
