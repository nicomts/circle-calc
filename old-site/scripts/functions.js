class Circle {
    #radius;
    #area;
    #diameter;
    #circumference;

    constructor(radius){
        this.#radius = radius
    }

    getArea(){
        this.#area = Math.PI*Math.pow(this.#radius, 2);
        return this.#area
    }

}



function calculateArea() {
    let radius = document.querySelector("#radius").value;
    if (isNaN(radius)) {
        alert("Please input a number");
    }
    else if (radius<0) {
        alert("Radius can't be negative");

    }
    else {
        const circle = new Circle(radius);    
        let area = circle.getArea();
        document.querySelector("#area").value = area;
    };
    
};

function resetValues(){
    document.querySelector("#radius").value = "";
    document.querySelector("#area").value = "";
}
