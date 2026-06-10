
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    // Toggles the "acive" class on both elements
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Image Modal Functionality
 const modal = document.getElementById('image-modal');
            const modalImg = modal.querySelector('.modal-img');
            const modalCaption = modal.querySelector('.modal-caption');
            const modalClose = modal.querySelector('.modal-close');

            function openImageModal(src, alt) {
                modalImg.src = src;
                modalImg.alt = alt;
                modalCaption.textContent = alt;
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
            }

            function closeImageModal() {
                modal.classList.remove('open');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                modalImg.src = '';
            }

            document.querySelectorAll('.gallery-main img').forEach(img => {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', () => openImageModal(img.src, img.alt || 'Gallery image'));
            });

            modalClose.addEventListener('click', closeImageModal);

            modal.addEventListener('click', event => {
                if (event.target.dataset.close !== undefined || event.target === modal) {
                    closeImageModal();
                }
            });

            document.addEventListener('keydown', event => {
                if (event.key === 'Escape' && modal.classList.contains('open')) {
                    closeImageModal();
                }
     });