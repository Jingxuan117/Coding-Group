class Pattern {
    constructor(side, colors) {
      this.side = side;
      this.colors = colors;
    }
  
    drawRect(x, y) {
      let randomColor = random(this.colors);
      fill(randomColor);
      rect(x, y, this.side, this.side);
    }
  
    drawVerticalPattern(xPositions, yPositions) {
      for (let i = 0; i < yPositions.length; i++) {
        let y = yPositions[i];
        for (let x = 0; x < width; x += this.side) {
          this.drawRect(x, y - this.side / 2);
        }
      }
    }
  
    drawHorizontalPattern(xPositions, yPositions) {
      for (let i = 0; i < xPositions.length; i++) {
        let x = xPositions[i];
        for (let y = 0; y < height; y += this.side) {
          this.drawRect(x - this.side / 2, y);
        }
      }
    }
  }
  
  function setup() {
    createCanvas(900, 900);
    background(255);
    let side = 30;
  
    let yellowPackage = color(230, 200, 40);
    let bluePackage = color(60, 60, 160);
    let whitePackage = color(220, 220, 210);
    let redPackage = color(176, 58, 46);
  
    let colors = [yellowPackage, bluePackage, whitePackage, redPackage];
  
    let yPositions = [105, 285, 405, 585, 765];
    let xPositions = [105, 225, 735, 855];
  
    let pattern = new Pattern(side, colors);
    
    pattern.drawVerticalPattern(xPositions, yPositions);
    pattern.drawHorizontalPattern(xPositions, yPositions);
  
    // Horizontal conveyor belt, the third row
    fill(241, 191, 152);
    rect(0, 300, 900, 90);
  
    // Two doors
    fill(221, 122, 88);
    rect(90, 300, 30, 90);
    rect(210, 300, 30, 90);
    rect(720, 300, 30, 90);
    rect(840, 300, 30, 90);
  
    // Left passageway
    fill(241, 191, 152);
    rect(120, 0, 90, 900);
  
    // Columns
    fill(114, 113, 113);
    rect(370, 300, 50, 90);
    rect(560, 300, 50, 90);
  
    // Left package machines
    fill(114, 98, 80);
    rect(120, 240, 90, 20);
    rect(120, 490, 90, 20);
    rect(120, 820, 90, 20);
  
    // Package colors
    fill(240, 210, 10);
    // Package 1
    rect(120, 175, 90, 65);
    rect(170, 140, 40, 35);
    // Package 2
    rect(120, 396, 90, 94);
    // Package 3
    rect(120, 740, 90, 80);
    // Package 4 inside horizontal conveyor belt
    rect(380, 310, 120, 80);
  
    // Package label
    fill(250, 250, 240);
    rect(170, 185, 30, 22); // 1
    rect(192, 145, 14, 10); // 1
    rect(135, 445, 40, 30); // 2
    rect(165, 760, 36, 26); // 3
    rect(410, 330, 40, 26); // 4
  
    // Tape on the second package
    fill(221, 195, 140);
    rect(182, 396, 18, 94);
  
    // Right passageway
    fill(241, 191, 152);
    rect(750, 0, 90, 900);
  
    // Conveyor belt behind the elevator on the right
    fill(0, 0, 0);
    rect(785, 0, 20, 900);
  
    // Elevator doors
    fill(70, 70, 196);
    rect(750, 775, 45, 125);
    rect(795, 775, 45, 125);
  
    // Elevator control box
    fill(173, 173, 170);
    rect(760, 150, 70, 70);
    fill(112, 108, 170);
    rect(780, 170, 30, 30);
  
    fill(107, 123, 199);
    rect(750, 540, 90, 20); // Elevator top
    rect(750, 700, 90, 20); // Elevator bottom
  
    fill(70, 70, 196);
    rect(750, 560, 90, 140); // Elevator box
  
    // Draw colors for the person
    let headColor = color(255, 224, 189);     // Head color
    let bodyColor = color(60, 60, 160);       // Body color
    let legColor = color(114, 113, 113);      // Leg color
    let armColor = color(60, 60, 160);        // Arm color
    let packageColor = color(240, 210, 10);   // Package color
  
    // Define the person's position
    let personX = 340; // Starting X position of the person
    let personY = 150; // Starting Y position of the person
  
    // Draw the person's head
    fill(headColor);
    rect(personX, personY, side, side);
  
    // Draw the person's body
    fill(bodyColor);
    rect(personX, personY + side, side, side * 2);
  
    // Draw the person's left arm
    fill(armColor);
    rect(personX - side / 2, personY + side, side / 2, side);
  
    // Draw the person's right arm
    fill(armColor);
    rect(personX + side, personY + side, side / 2, side);
  
    // Draw the person's left leg
    fill(legColor);
    rect(personX, personY + side * 3, side / 2, side);
  
    // Draw the person's right leg
    fill(legColor);
    rect(personX + side / 2, personY + side * 3, side / 2, side);
  
    // Draw the package
    fill(packageColor);
    rect(personX + 3, personY + side + 5, side / 1.2, side);
  
    // Package label
    fill(250, 250, 240);
    rect(personX + 8, personY + side + 10, side / 3, side / 5);
  }