// navbar
var list_icon = document.getElementById("list_icon");
var ul_header = document.getElementById("ul_header");
list_icon.addEventListener("click",()=>{
    if(ul_header.style.transform == "translate(0%)"){
        ul_header.style.transform = "translate(-100%)";
        list_icon.style.color = "white";
    }
    else{
        ul_header.style.transform = "translate(0%)";
        list_icon.style.color = "black";
    }
})
// slider
var prev_slider = document.getElementById("prev_slider");
var next_slider = document.getElementById("next_slider");
var container_slider = document.querySelectorAll(".container_slider");
var index = 0;
function next(){
    container_slider[index].classList.remove("active_slider");
    index = (index+1) % container_slider.length;
    container_slider[index].classList.add("active_slider");
}
next_slider.addEventListener("click",()=>{
    container_slider[index].classList.remove("active_slider");
    index = (index+1) % container_slider.length;
    container_slider[index].classList.add("active_slider");
})
prev_slider.addEventListener("click",()=>{
    container_slider[index].classList.remove("active_slider");
    index = (index-1 + container_slider.length) % container_slider.length;
    container_slider[index].classList.add("active_slider");
})
setInterval(next,10000)
