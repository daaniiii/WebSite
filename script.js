// Fonction pour afficher une alerte avec le message personnalisé sur WhatsApp
document.getElementById("contact-btn").addEventListener("click", function () {
  const message = encodeURIComponent(
    "Bonjour, je suis intéressé par vos services pour la création de sites web."
  );
  const whatsappNumber = "237123456789"; // Remplacez par votre numéro WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
});

// Animation au clic sur les cartes des services
const siteCards = document.querySelectorAll(".site-card");
siteCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(1.1)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 300);
  });
});

// Effet d'animation sur les boîtes interactives
const animatedBoxes = document.querySelectorAll(".animated-box");
animatedBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = getRandomColor();
    box.style.transform = "rotate(360deg)";
    setTimeout(() => {
      box.style.transform = "rotate(0deg)";
    }, 1000);
  });
});

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Défilement automatique horizontal pour les services
const servicesContainer = document.querySelector(".sites-list");
let scrollAmount = 0;

function autoScrollServices() {
  scrollAmount += 2; // Ajustez la vitesse de défilement
  if (scrollAmount >= servicesContainer.scrollWidth) {
    scrollAmount = 0;
  }
  servicesContainer.scrollLeft = scrollAmount;
}

setInterval(autoScrollServices, 50);

// Apparition progressive des sections lors du défilement
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  sections.forEach((section) => {
    if (scrollPosition > section.offsetTop + section.offsetHeight / 4) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Initialisation des sections avec opacité réduite
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.5s ease";
});