document.addEventListener('DOMContentLoaded', () => {
    const portfolioLayouts = {
        "popular-pet": "/assets/images/screencapture-popularpet-br-2025-08-28-08_51_54.png",
        "open-solutions": "/assets/images/open-solutions.png",
        "sac-cooperata": "/assets/images/sac-cooperata.png",
        "panair": "/assets/images/criacao-site-setor-industrial-panair.jpg"
    };

    const modalOverlay = document.getElementById('portfolio-modal-overlay');
    const modalImage = document.getElementById('portfolio-modal-image');
    const closeButton = document.getElementById('portfolio-modal-close');
    const body = document.body;

    const viewLayoutButtons = document.querySelectorAll('.portfolio-item .btn-primary');

    viewLayoutButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const portfolioItem = event.target.closest('.portfolio-item');
            if (portfolioItem) {
                const itemId = portfolioItem.id;
                const imageUrl = portfolioLayouts[itemId];

                if (imageUrl) {
                    modalImage.src = imageUrl;
                    modalImage.alt = `Layout do projeto ${portfolioItem.querySelector('h3').textContent}`;
                    modalOverlay.classList.add('active');
                    body.classList.add('no-scroll');
                } else {
                    console.warn(`URL da imagem não encontrada para o item: ${itemId}`);
                }
            }
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    closeButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});