function setup() {
    createCanvas(600, 600);
    background("purple");
  }
  
  function draw() {
    stroke("black");
    fill("black");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  