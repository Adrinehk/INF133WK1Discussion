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