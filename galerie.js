const photos = [
    { name: 'IMG_0519.webp', category: 'utilitare', alt: 'Huse Renault Master' },
    { name: 'IMG_0522.webp', category: 'detalii', alt: 'Detaliu cusătură dublă' },
    { name: 'IMG_0523.webp', category: 'detalii', alt: 'Detaliu cusătură dublă' },
];

const lightbox = GLightbox({ 
    selector: '.glightbox',
    touchNavigation: true,
    loop: true
});

const galleryGrid = document.getElementById('vinero-gallery');

function renderGallery(filter = 'all') {
    const galleryGrid = document.getElementById('vinero-gallery');
    if (!galleryGrid) return; // Safety check
    
    galleryGrid.innerHTML = ''; // Clear current view

    photos.forEach(photo => {
        if (filter === 'all' || photo.category === filter) {
            const item = document.createElement('div');
            item.className = `gallery-item ${photo.category}`;
            
            item.innerHTML = `
                <a href="poze_galerie/full/Audi_A4_2020/${photo.name}" class="glightbox">
                    <img src="poze_galerie/thumbnail/Audi_A4_2020/${photo.name}" alt="${photo.alt}" loading="lazy">
                </a>
            `;
            galleryGrid.appendChild(item);
        }
    });
    
    lightbox.reload();
}

function filterSelection(category) {
    renderGallery(category);
    const buttons = document.querySelectorAll('.filter-btn');
    // Remove 'active' from all
    buttons.forEach(btn => btn.classList.remove('active'));
    // Add 'active' to the one that was clicked
    // This assumes your HTML buttons look like: onclick="filterSelection('premium', this)"
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
