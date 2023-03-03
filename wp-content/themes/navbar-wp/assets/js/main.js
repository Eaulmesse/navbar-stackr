const ButtonBesoin = document.querySelectorAll(".link-vosbesoins button")
const ButtonNavBesoin = document.querySelector("#nav-vosbesoins")


ButtonNavBesoin.addEventListener("click", function() {
    var ModalBesoin = document.querySelector(".modal-vosbesoins")
    if (ModalBesoin.style.display === "none") {

        ModalBesoin.style.display = "flex";
    }   
    else {
        ModalBesoin.style.display = "none";
    }
})


ButtonBesoin.forEach(button => {

    button.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ed6c6a";
        this.style.color = "white";
        this.style.transitionDuration = "0.2s";

    });

    button.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#f0f0f0";
        this.style.color = "black";
    });

})










