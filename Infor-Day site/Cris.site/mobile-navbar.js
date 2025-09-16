class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index)=> {
            link.style.animation
                ? (link.style.animation = "") // Remove a animação se já existir
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); // Aplica a animação corretamente
            
        });

    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        // Corrigido o erro no addEventListener
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

// Corrigido a chamada do método init
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();

// Define a data final do evento
const eventDate = new Date("2025-10-30T00:00:00").getTime();

// Atualiza o cronômetro a cada 1 segundo
const countdownFunction = setInterval(function() {

    // Pega a data e hora de agora
    const now = new Date().getTime();
    
    // Calcula a distância entre agora e a data do evento
    const distance = eventDate - now;
    
    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Mostra o resultado nos elementos HTML com os IDs correspondentes
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // Se a contagem terminar, exibe uma mensagem e para o cronômetro
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h3>O EVENTO COMEÇOU!</h3>";
    }
}, 1000);
