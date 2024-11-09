let displayBox = document.querySelector(".display");
function showDisplay(event) {
     const x = event.target.innerText;
    //   console.log(x);
    if (displayBox.innerHTML == 0) {
        return (displayBox.innerHTML = x);
    }
     return (displayBox.innerHTML += x);
}
function calculate() {
    let result=displayBox.innerText;
    // console.log(result);
    // console.log(eval(result));
    if (result.includes("rad")) {
        result = result.replace('rad','');
        displayBox.innerText = Math.sqrt(eval(result));
        return;
    }
    displayBox.innerText = eval(result);
    
}
function allClear() {
    displayBox.innerText = 0;
}
function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1);
    }
}
function sinos() {
    displayBox.innerText = Math.sin(eval(displayBox.innerText));
}
function coss() {
    displayBox.innerText = Math.cos(eval(displayBox.innerText));
}
function tann() {
    displayBox.innerText = Math.tan(eval(displayBox.innerText));
}
function cott() {
    displayBox.innerText = Math.cot(eval(displayBox.innerText))
}
function pi() {
    let pi=Math.PI;
    displayBox.innerText = eval(pi)
}
function radical() {
    displayBox.innerText = "rad("
}
function logg() {
    displayBox.innerText = Math.log(eval(displayBox.innerText));
}
document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
document.querySelector(".PI").addEventListener("click", pi);
document.querySelector(".rad").addEventListener("click", radical);
document.querySelector(".sin").addEventListener("click", sinos);
document.querySelector(".cos").addEventListener("click", coss);
document.querySelector(".tan").addEventListener("click", tann);
document.querySelector(".cot").addEventListener("click", cott);
document.querySelector(".log").addEventListener("click", logg);


let list=document.querySelectorAll(".show-display")
// console.log(list);
list.forEach((item) => {
    item.addEventListener("click" , showDisplay);
});



