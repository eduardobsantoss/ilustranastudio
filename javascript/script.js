// JavaScript opcional para pausar o carrossel ao passar o mouse
const carouselTrack = document.querySelector('.carousel-track'); // ou o seletor correto

if (carouselTrack) {
  carouselTrack.addEventListener('mouseenter', () => {
    carouselTrack.style.animationPlayState = 'paused';
  });

  carouselTrack.addEventListener('mouseleave', () => {
    carouselTrack.style.animationPlayState = 'running';
  });
} else {
  console.warn("Elemento '.carousel-track' não encontrado. Verifique o seletor.");
}


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = track.querySelectorAll("img");

  // Clona as imagens para o efeito infinito
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    track.appendChild(clone);
  });
});

//Efeito de Scroll
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".illustration-item");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
              observer.unobserve(entry.target); // Evita reanimação
          }
      });
  }, { threshold: 0.2 });

  items.forEach((item) => {
      observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Aplica a classe 'fade-in' ao carregar a página
  document.body.classList.add("fade-in");

  // Adiciona o evento de clique aos links de navegação
  document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault(); // Previne a navegação instantânea
          const targetUrl = link.href;

          // Adiciona um pequeno delay antes de remover 'fade-in' para o fade-out
          setTimeout(() => {
              document.body.classList.remove("fade-in");

              // Aguarda a transição antes de redirecionar
              setTimeout(() => {
                  window.location.href = targetUrl;
              }, 500); // Deve corresponder ao tempo da transição no CSS
          }, 10);
      });
  });
});







