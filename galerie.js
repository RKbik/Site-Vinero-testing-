const photos = [
    { name: 'IMG_0523.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Huse Audi A4 Piele' },
    { name: 'IMG_0519.webp', folder: 'poze_galerie/full/Audi_A4_2020/', category: 'Renault Master', alt: 'Huse Renault Master' },
    { name: 'IMG_0522.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Detalii Design', alt: 'Detaliu cusătură dublă' },
];

const lightbox = GLightbox({ 
    selector: '.glightbox',
    touchNavigation: true,
    loop: true
});

function renderGallery() {
    const galleryGrid = document.getElementById('vinero-gallery');
    if (!galleryGrid) return; // Exit if the div doesn't exist
    
    galleryGrid.innerHTML = ''; 

    const categories = [...new Set(photos.map(p => p.category))];

    categories.forEach(cat => {
        const section = document.createElement('section');
        section.className = 'car-row-section';
        
        const scrollId = cat.replace(/\s+/g, '-').toLowerCase();
        
        section.innerHTML = `
            <h2 class="car-row-title">${cat.toUpperCase()}</h2>
            <div class="car-row-container">
                <div class="car-row-scroll" id="scroll-${scrollId}">
                    </div>
                <button class="nav-btn next" onclick="scrollRow('${scrollId}', 1)">&#10095;</button>
                <button class="nav-btn prev" onclick="scrollRow('${scrollId}', -1)">&#10094;</button>
            </div>
        `;

        const scrollContainer = section.querySelector('.car-row-scroll');

        photos.filter(p => p.category === cat).forEach(photo => {
            const item = document.createElement('div');
            item.className = 'car-card';
            item.innerHTML = `
                <a href="${photo.folder}/${photo.name}" class="glightbox">
                    <img src="poze_galerie/thumbnail/${photo.name}" alt="${photo.alt}" loading="lazy">
                </a>
            `;
            scrollContainer.appendChild(item);
        });

        galleryGrid.appendChild(section);
    });

    if (typeof lightbox !== 'undefined') {
        lightbox.reload();
    }
}

function scrollRow(scrollId, direction) {
    const container = document.getElementById(`scroll-${scrollId}`);
    if (container) {
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
