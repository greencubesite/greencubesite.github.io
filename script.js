var img = document.getElementById("cover-img");

document.getElementById("btn-A").addEventListener("click", function() {
    img.src='./images/FVM22rs.jpg';
    restartAnimation();
});

document.getElementById("btn-B").addEventListener("click", function() {
    img.src='./images/CVM22rs.jpg';
    restartAnimation();
});
document.getElementById("btn-C").addEventListener("click", function() {
    img.src='./images/RVM.jpg';
    restartAnimation();
});

function restartAnimation(){
    document.querySelector(".cover").classList.remove("animate");

    setTimeout(function(){
        document.querySelector(".cover").classList.add("animate");
    },1);
}