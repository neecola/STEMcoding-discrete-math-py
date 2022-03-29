xchecker1 = 50;
ychecker1 = 50;

showaxes = false;

function draw(){

  clearscreen(255,255,255); // white background  
  display(); // draw checkerboard
  
  if ((keyIsPressed == true) && (key == 1)) ychecker1 += 100;
  
  // add code below to make sure the checkers stop at the bottom

  // add code below to end the game
    
  fill(0,0,0); // rgb 0,0,0 means black
  circle(xchecker1,ychecker1,50);
  
} // end draw() DO NOT ADD ANY CODE AFTER THIS LINE!!!