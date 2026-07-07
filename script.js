// Animação suave ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Exemplo: trocar a imagem do banner ao clicar no botão
const btnSaibaMais = document.querySelector('.btn');
if (btnSaibaMais) {
    btnSaibaMais.addEventListener('click', function() {
        console.log(' Navegando para a seção Sobre...');
    });
}

// Exemplo: carregar uma imagem dinamicamente via JS
function carregarImagemDinamica() {
    const img = document.createElement('img');
    // Caminho relativo ao index.html
    img.src = 'assets/imagens/tecnologia-agro.jpg';
    img.alt = 'Tecnologia no campo';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '10px';
    img.style.marginTop = '20px';
    document.querySelector('.sobre .container').appendChild(img);
}

// Descomente a linha abaixo para testar:
// carregarImagemDinamica();
