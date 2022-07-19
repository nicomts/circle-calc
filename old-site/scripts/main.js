let calculateButton = document.querySelector("#calculate");
let resetButton = document.querySelector("#reset");
window.onload = document.querySelector("#area").value = "";

calculateButton.onclick = function () {
    calculateArea();
    return false;
};

resetButton.onclick = function(){
    resetValues();
    return false;
};

