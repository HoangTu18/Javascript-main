class HttpRequest {
  constructor(host, port) {
    this.host = host;
    this.port = port
  }

  calc() {
    console.log('calc price: ' + (this.host))
  }
}

const httpRequest = new HttpRequest('localhost', '3000')
httpRequest.calc();

// super, inheritance
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width
  }
}

class Square extends Rectangle {
  constructor(height, width) {
    super(height, width);
    // this.width = width;
    // this.height = height
  }

  inRadius() {
    const abc = this.area();
    return abc / 2
  }

}

const square = new Square(10, 30);

console.log(square.area());
console.log(square.inRadius())