console.log("Site carregado com sucesso!");
// Lógica básica de scroll suave para o botão
document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});