let x = 100
let y = 50
let xspeed = 3
let yspeed = 3
let fil = 0
let fil1 = 0
let fil2 = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CENTER)
  fill(fil, fil1, fil2)
  rect(x, y, 100, 100)

  if (keyCode === LEFT_ARROW) {
    x = x - xspeed;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + xspeed;
  }
  if (keyCode === UP_ARROW) {
    y = y - yspeed;
  } else if (keyCode === DOWN_ARROW) {
    y = y + yspeed;
  }
  if (x > width - 50) {
    fil = random(0, 255)
    fil1 = random(0, 255)
    fil2 = random(0, 255)
    x = x - 10
    yspeed = 3
  }
  if (x < 0 + 50) {
    fil = random(0, 255)
    fil1 = random(0, 255)
    fil2 = random(0, 255)
    x = x + 10
    yspeed = 3
  }
  if (y > height - 50) {
    yspeed = yspeed * -1
    fil = random(0, 255)
    fil1 = random(0, 255)
    fil2 = random(0, 255)
    y = y - 10
    yspeed = 3
  }
  if (y < 0 + 50) {
    yspeed = yspeed * -1
    fil = random(0, 255)
    fil1 = random(0, 255)
    fil2 = random(0, 255)
    y = y + 10
    yspeed = 3
  }

  function keyPressed() {
    if (keyCode === 82) {
      let x = 100
      let y = 50
      let xspeed = 3
      let yspeed = 3
      let fil = 0
      let fil1 = 0
      let fil2 = 0
    }
  }
}