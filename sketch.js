  
function setup() {
  createCanvas(1000, 1000);
   translate(width / 2, height / 2);
  var r;
  var g;
  var b;
  var a; 
  let angle = 0
  let pulse = 0 
   
  

}

function draw() {
  background(0);
   //If Else Statement For Eye Closing  - Key Pressed Lab by taeyoon 
   if (mouseIsPressed) {
    let point = { x: mouseX, y: mouseY };
     background(0);
      eyeClosed();   
    } else { 
      retina();
    
    
    }
  
  //Variables For Eye Closing Color Rainbow 
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255);
  
    // Display text with mouse coordinates
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  // Display "By CARIA" at specific coordinates
  textSize(30)
  text('By CARIA TAYLOR', windowWidth,windowHeight);

 
 }

function eyeClosed(){

   push();
  translate(700, 550);
  scale(2.8)
//Eye Closed 
  stroke(r,g,b);
  strokeWeight(8);
  fill(0);

  beginShape();
  vertex(-100, 0);
  bezierVertex(-70, -60, 70, -60, 100, 0);
  bezierVertex(70, 40, -70, 40, -100, 0);
  endShape(CLOSE);  
  stroke(0);
  strokeWeight(3);
  

}

function retina () {
  
  //Declaring Color Variables
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255);
  stroke(0);
  //Shape Of Open Eye 
  strokeWeight(5);
  fill(255)
  ellipse(700, 550, 350, 300);
  fill(255)
  stroke(r,g,b);
  ellipse(700, 550, 575, 350);
  
  //Contoloing the anlgle of the innner eye spiral 
   let angle = 0

   
  //Time variable + speed of animation
  let time = frameCount * 0.01   
  //Outter eye movement 
  let eyeX = 700 + sin(time) * 10; // 700 intial x sin
  let eyeY = 560 + cos(time) * 10; // 590 intial x cos 
  
  //Inner eye pulse
   let pupilX = 100; 
   let pupilY = 90; 
   let pulse = sin(time) * 0 //Moves in and out
   let Wpupil = pupilX + pulse; 
   let Hpupil = pupilY + pulse;
  
  //Outter Eye Shape
  noStroke();
   fill(0);
   arc(eyeX,eyeY,250,250, radians(360), radians(0)); 
  //Inner Eye Shape 
   fill(255);
  arc(eyeX,eyeY,Wpupil,Hpupil, radians(360), radians(0));
  
   
  //Inner eye Spiral  
  rotate(angle); 
  
  //Fixed wih Inner Pupil Pulse  - rotate books cosine sine by taeyoon
  translate(eyeX,eyeY)
  for (let i=0; i<50; i++){
  rotate(cos(angle)*PI/2)
   stroke(0); 
  fill(r,g,b);
  rect(sin(eyeX)*30,sin(eyeY)*20, 50, 10); 
  angle += 0.01;
 
  }   
  
}