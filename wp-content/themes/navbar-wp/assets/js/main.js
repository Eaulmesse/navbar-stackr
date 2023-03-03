const ButtonBesoin = document.querySelectorAll(".link-vosbesoins button")
const ButtonNavBesoin = document.querySelector("#nav-vosbesoins")
const ButtonEnseigne = document.querySelector('#button-enseigne')

// Apparition de la modal de Besoin

ButtonNavBesoin.addEventListener("click", function() {
    let ModalBesoin = document.querySelector(".modal-vosbesoins")
    if (ModalBesoin.style.display === "none") {

        ModalBesoin.style.display = "flex";
    }   
    else {
        ModalBesoin.style.display = "none";
    }
})

// Animation des boutons de Besoin

ButtonBesoin.forEach(button => {
    button.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ed6c6a";
        this.style.color = "white";
        this.style.transitionDuration = "0.2s";

    });

    button.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "black";
    });
})


const TextBesoin = document.querySelector(".text-vosbesoins")
const TextBesoinTitle = document.querySelector(".text-vosbesoins p")
const TextBesoinLink = document.querySelectorAll(".text-vosbesoins a")

ButtonEnseigne.addEventListener("click", function() {

    if (TextBesoinTitle.innerText != "Quel est votre besoin ?") {
        TextBesoinTitle.innerText = "Quel est votre besoin ?";
        TextBesoinLink[0].innerText = "Mesurer la fréquentation à l’entrée de vos sites";
        TextBesoinLink[1].innerText = "Mesurer la fréquentation à l’intérieur de vos sites";
        TextBesoinLink[2].innerText = "Optimiser vos taux de transformation";
        TextBesoinLink[3].innerText = "Réduire vos vols";
        TextBesoinLink[4].innerText = "Réduire les coûts de votre patrimoine foncier multisites";
    } else {
        TextBesoinTitle.innerText = "";
        TextBesoinLink[0].innerText = "";
        TextBesoinLink[1].innerText = "";
        TextBesoinLink[2].innerText = "";
        TextBesoinLink[3].innerText = "";
        TextBesoinLink[4].innerText = "";
    }
})


TextBesoinLink.forEach(a => {
    a.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ed6c6a";
        this.style.color = "white";
        this.style.transitionDuration = "0.2s";

    });

    a.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "black";
    });
})







