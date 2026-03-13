function showContent(event, id){

let contents = document.querySelectorAll(".content");

contents.forEach(function(content){
content.style.display = "none";
});

document.getElementById(id).style.display = "block";

let buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(function(btn){
btn.classList.remove("active");
});

event.target.classList.add("active");

}