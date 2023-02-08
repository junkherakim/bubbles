/*
 * This sketch generates colored bubbles followed by mouse position
 * when mouse is pressed it acts like a painting brush
 * to produce bubbles of different sizes and orientations, creating  
 * a fizzy texture. 
 * The generated bubbles also respond to mouse click causing it 
 * to pop and changes to its complementary color.
 * Joon sung Kim, n10916059
 * Some of code adapted from: 
 * https://www.youtube.com/watch?v=fBqaA7zRO58
 * - I used the arrays of objects example as the basis for developing
 *   this sketch but added interactivities and movements.
 */


// Declare vaiable for array contain bubble objects
let bubbles = [];

// set canvas size
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/* Declare function for create bubble objects 
 * and push into bubbles array
*/
function mouseDragged() {
  let b = new Bubble(mouseX, mouseY, random(10, 30));
  bubbles.push(b);
}

// Declare function for check the object clicked and pop it 
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].rollover(mouseX, mouseY);
  }
}

/*
 *  Set background color. 
 *  Draws bubble objects aninmation use loop from bubbles array 
 */
function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

// Declare class for create bubble objects
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r + random(5);
    this.h = 180;
    this.b = 100;
    this.s = 100;
    this.sw = 1;
    this.ys = random(-2, 0);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + this.ys
  }

  show() {
    noStroke();
    colorMode(HSB);
    stroke(180);
    strokeWeight(this.sw);
    let rdm =
      fill(this.h + random(-40, 40), this.s, this.b, 0.5);
    ellipse(this.x + random(-1, 1), this.y + random(-1, 1), this.r)
  }

  rollover(_x, _y) {
    let d = dist(_x, _y, this.x, this.y);
    if (d < this.r) {
      this.h = abs(this.h - 180);
      this.ys = random(-6, -4);
      this.r = this.r / 2;
    }
  }

}