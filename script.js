var faceImage = document.getElementById('face');

document.getElementById('designerText').addEventListener('mouseenter', function() {
  faceImage.src = "./imgs/artme.png";
  faceImage.style.height = "72vh";
  faceImage.classList.add('face-visible');
});

document.getElementById('scientistText').addEventListener('mouseenter', function() {
  faceImage.src = "./imgs/me.png";
  faceImage.classList.add('face-visible');
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e=>{
    cursor.setAttribute("style", "top : "+(e.pageY-12)+"px; left: "+(e.pageX-12)+"px;");



})

document.addEventListener('click', ()=>{
    cursor.classList.add("expand");
    setTimeout(()=>{
        cursor.classList.remove("expand");

    }, 500)
})
const Root = document.querySelector(".about-container");
const Bg = document.querySelector(".bg");

Root.addEventListener("mousemove", function(e) {
    Bg.style.left = `${e.clientX}px`;
    Bg.style.top = `${e.clientY}px`;
});

// const aboutContainer = document.querySelector(".about-container");
// const aboutText = document.querySelector("#about p");

// aboutContainer.addEventListener("mousemove", () => {
//     aboutText.classList.add("light-text");
// });

// aboutContainer.addEventListener("mouseleave", () => {
//     aboutText.classList.remove("light-text");
// });
