const ButtonBesoin = document.querySelectorAll(".link-vosbesoins button")
const ButtonNavBesoin = document.querySelector("#nav-vosbesoins")
const ButtonEnseigne = document.querySelector('#button-enseigne')
const ButtonIndustrie = document.querySelector('#button-industrie')

const TextBesoin = document.querySelector(".text-vosbesoins")
const TextBesoinTitle = document.querySelector(".text-vosbesoins p")
const TextBesoinLink = document.querySelectorAll(".text-vosbesoins a")
let ModalBesoin = document.querySelector(".modal-vosbesoins")
ModalBesoin.style.display = "none"

// Apparition de la modal de Besoin

ButtonNavBesoin.addEventListener("click", function() {
    
    if (ModalBesoin.style.display === "none") {
        ModalBesoin.style.display = "flex";
    }   
    else {
        ModalBesoin.style.display = "none";
    }
})

// Animation des boutons de Besoin



let verifButton

ButtonBesoin.forEach((button, index) => {

    button.addEventListener("click", function() {
        this.style.backgroundColor = "#ed6c6a";
        this.style.color = "white";
        this.style.transitionDuration = "0.2s";

    });
    button.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#ed6c6a";
        this.style.color = "white";
        this.style.transitionDuration = "0.2s";

    });
    button.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
        this.style.color = "black";
    });

   


    button.addEventListener("click", function() {
    
        if (this == verifButton) {

            TextBesoin.style.display = "none"
            TextBesoinTitle.innerText = "";
            TextBesoinLink[0].innerText = "";
            TextBesoinLink[1].innerText = "";
            TextBesoinLink[2].innerText = "";
            TextBesoinLink[3].innerText = "";
            TextBesoinLink[4].innerText = "";

            verifButton = undefined
        }
        else if (this == ButtonBesoin[0]) {
            

            TextBesoin.style.display = "flex"
            TextBesoinTitle.innerText = "Quel est votre besoin ?";
            TextBesoinLink[0].innerText = "Mesurer la fréquentation à l’entrée de vos sites";
            TextBesoinLink[0].href = "http://navbarwp/wordpress/"

            TextBesoinLink[1].innerText = "Mesurer la fréquentation à l’intérieur de vos sites";
            TextBesoinLink[1].href = "http://navbarwp/wordpress/"

            TextBesoinLink[2].innerText = "Optimiser vos taux de transformation";
            TextBesoinLink[2].href = "http://navbarwp/wordpress/"

            TextBesoinLink[3].innerText = "Réduire vos vols";
            TextBesoinLink[3].href = "http://navbarwp/wordpress/"

            TextBesoinLink[4].innerText = "Réduire les coûts de votre patrimoine foncier multisites";
            TextBesoinLink[4].href = "http://navbarwp/wordpress/"

            verifButton = this
        } 
        else if (this == ButtonBesoin[1]) {


            TextBesoin.style.display = "flex";
            TextBesoinTitle.innerText = "Quel est votre besoin ?";
            TextBesoinLink[0].innerText = "Digitaliser l’accueil et augmenter la sécurité des accès";
            TextBesoinLink[0].href = "http://navbarwp/wordpress/"

            TextBesoinLink[1].innerText = "Augmenter la traçabilité de vos flux";
            TextBesoinLink[1].href = "http://navbarwp/wordpress/"

            TextBesoinLink[2].innerText = "Augmenter la rentabilité de vos sites";
            TextBesoinLink[2].href = "http://navbarwp/wordpress/"

            TextBesoinLink[3].innerText = "";
            TextBesoinLink[3].href = "http://navbarwp/wordpress/"

            TextBesoinLink[4].innerText = "";
            TextBesoinLink[4].href = "http://navbarwp/wordpress/"

            verifButton = this
        }   
        else if (this == ButtonBesoin[2]) {

            TextBesoin.style.display = "flex";
            TextBesoinTitle.innerText = "Quel est votre besoin ?";
            TextBesoinLink[0].innerText = "Mesurer la fréquentation à l’entrée de vos sites";
            TextBesoinLink[0].href = "http://navbarwp/wordpress/"

            TextBesoinLink[1].innerText = "Digitaliser l’accueil et augmenter la sécurité des accès";
            TextBesoinLink[1].href = "http://navbarwp/wordpress/"

            TextBesoinLink[2].innerText = "Augmenter la traçabilité de vos flux";
            TextBesoinLink[2].href = "http://navbarwp/wordpress/"

            TextBesoinLink[3].innerText = "Augmenter la rentabilité de vos sites";
            TextBesoinLink[3].href = "http://navbarwp/wordpress/"

            TextBesoinLink[4].innerText = "";
            TextBesoinLink[4].href = "http://navbarwp/wordpress/"

            verifButton = this
        }   
        else if (this == ButtonBesoin[3]) {

            TextBesoin.style.display = "flex";
            TextBesoinTitle.innerText = "Quel est votre besoin ?";
            TextBesoinLink[0].innerText = "Mesurer la fréquentation à l’entrée de vos sites";
            TextBesoinLink[0].href = "http://navbarwp/wordpress/"

            TextBesoinLink[1].innerText = "Mesurer la fréquentation à l’intérieur de vos sites";
            TextBesoinLink[1].href = "http://navbarwp/wordpress/"

            TextBesoinLink[2].innerText = "";
            TextBesoinLink[2].href = "http://navbarwp/wordpress/"

            TextBesoinLink[3].innerText = "";
            TextBesoinLink[3].href = "http://navbarwp/wordpress/"

            TextBesoinLink[4].innerText = "";
            TextBesoinLink[4].href = "http://navbarwp/wordpress/"

            verifButton = this
        } 
        else if (this == ButtonBesoin[4]) {

            TextBesoin.style.display = "flex";
            TextBesoinTitle.innerText = "Quel est votre besoin ?";
            TextBesoinLink[0].innerText = "Réduire vos vols";
            TextBesoinLink[0].href = "http://navbarwp/wordpress/"

            TextBesoinLink[1].innerText = "";
            TextBesoinLink[1].href = "http://navbarwp/wordpress/"

            TextBesoinLink[2].innerText = "";
            TextBesoinLink[2].href = "http://navbarwp/wordpress/"

            TextBesoinLink[3].innerText = "";
            TextBesoinLink[3].href = "http://navbarwp/wordpress/"

            TextBesoinLink[4].innerText = "";
            TextBesoinLink[4].href = "http://navbarwp/wordpress/"

            verifButton = this
        }   
    })

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



