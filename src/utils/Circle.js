export class Circle {
    #radius;
    #area;
    #diameter;
    #circumference;
  
    constructor(radius) {
      this.#radius = radius;
      this.#area = 0;
      this.#diameter = 0;
      this.#circumference = 0;
    }
  
    setRadius(radiusValue) {
      if (isNaN(radiusValue)) {
          alert("Please input a number");
      }
      else if (radiusValue < 0) {
          alert("Radius can't be negative");
      }
      else {
          this.#radius = radiusValue;
      }
    }
  
    getArea() {
      this.#area = Math.PI * Math.pow(this.#radius, 2);
      return this.#area;
    }
  
    getDiameter() {
      this.#diameter = 2 * this.#radius;
      return this.#diameter;
    }
  
    getCircumference() {
      this.#circumference = 2 * Math.PI * this.#radius;
      return this.#circumference;
    }
  
  }

