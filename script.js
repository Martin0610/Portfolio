const text = "Hi, I'm Martin";
let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,100);

}

}

typeEffect();

window.addEventListener("scroll", reveal);

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 150;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});