function solve(width, height, color) {
  return {
    width,
    height,
    color: color[0].toUpperCase() + color.slice(1),
    calcArea() {
      return this.height * this.width;
    },
  };
}

let rect = solve(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
