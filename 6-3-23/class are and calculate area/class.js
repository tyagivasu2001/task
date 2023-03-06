class Area {
  rectangleArea() {
    let length = window.prompt(" Enter the Length of Rectangle:");
    let bredth = window.prompt("Enter the breadth of Rectangle:");
    document.writeln(" The area is :" + length * bredth);
  }
  squareArea() {
    let side = window.prompt(" Enter the Side of Square:");
    document.writeln("Area is :" + side * side);
  }
  triangleArea() {
    let height = window.prompt(" Enter the heigth of Triangle:");
    let base = window.prompt(" Enter the Length of Triangle:");
    document.writeln((base * height) / 2);
  }
}
var obj = new Area();
