const photos = [
    { name: 'IMG_0523.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Huse Audi A4 Piele 1' },
    { name: 'IMG_0519.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Huse Audi A4 Piele 2' },
    { name: 'IMG_0522.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Huse Audi A4 Piele 3' },
    { name: 'IMG_0138.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero Logan 2020', alt: 'Dacia Sandero Logan 2020 1' },
    { name: 'IMG_9653.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero Logan 2020', alt: 'Dacia Sandero Logan 2020 2' },
    { name: 'IMG_9655.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero Logan 2020', alt: 'Dacia Sandero Logan 2020 3' },
    { name: 'IMG_9656.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero Logan 2020', alt: 'Dacia Sandero Logan 2020 4' },
    { name: 'IMG_9657.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero Logan 2020', alt: 'Dacia Sandero Logan 2020 5' },
    { name: 'IMG_8126.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Dacia Sandero Stepway 1' },
    { name: 'IMG_8127.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Dacia Sandero Stepway 2' },
    { name: 'IMG_8128.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Dacia Sandero Stepway 3' },
    { name: 'IMG_8132.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Dacia Sandero Stepway 4' },
    { name: 'IMG_8133.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Dacia Sandero Stepway 5' },
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
