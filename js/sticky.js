window.addEventListener("scroll", () => {
    var w = window.innerWidth;
    let header = document.querySelector("#navbar_top");
    if(w > 800){
        header.classList.toggle("sticky", window.scrollY > 20);
        header.style.background = 'red';
    }
})