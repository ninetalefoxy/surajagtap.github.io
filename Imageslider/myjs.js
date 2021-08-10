const slider = document.querySelector(".slider");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container");

const dragyoass = (e) => {
    let xPos = e.layerX;
    before.style.width = xPos + "px";
    slider.style.left = xPos + "px";
    console.log(before.style.width);
    console.log(xPos)
    if(xPos < 200){
        before.style.width=0;
        slider.style.left=0;
    }
};

container.addEventListener('mousemove', dragyoass);