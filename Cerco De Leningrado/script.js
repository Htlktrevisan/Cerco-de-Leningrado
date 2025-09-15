document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MODAL DA GALERIA ---
    const galleryImages = document.querySelectorAll('.galeria-grid img');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-nav.prev');
    const nextBtn = document.querySelector('.modal-nav.next');

    let currentIndex;

    // Função para abrir o modal
    const openModal = (index) => {
        currentIndex = index;
        const imgSrc = galleryImages[currentIndex].src;
        const imgDescription = galleryImages[currentIndex].dataset.description;

        modalImage.src = imgSrc;
        modalDescription.textContent = imgDescription;
        modal.style.display = 'flex';
    };

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Funções de navegação
    const showPrevImage = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        openModal(currentIndex);
    };

    const showNextImage = () => {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        openModal(currentIndex);
    };

    // Adiciona os "escutadores" de eventos
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            openModal(index);
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Fecha o modal se clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fecha o modal com a tecla "Escape" e navega com as setas
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            }
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            }
            if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
});