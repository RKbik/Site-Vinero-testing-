function renderGallery() {
    const galleryGrid = document.getElementById('vinero-gallery');
    galleryGrid.innerHTML = ''; 

    // 1. Get unique categories/folders
    const categories = [...new Set(photos.map(p => p.category))];

    categories.forEach(cat => {
        // 2. Create a Section for this car
        const section = document.createElement('section');
        section.className = 'car-row-section';
        
        section.innerHTML = `
            <h2 class="car-row-title">${cat.replace(/-/g, ' ').toUpperCase()}</h2>
            <div class="car-row-container">
                <div class="car-row-scroll" id="scroll-${cat}">
                    </div>
                <button class="nav-btn next" onclick="scrollRow('${cat}', 1)">&#10095;</button>
                <button class="nav-btn prev" onclick="scrollRow('${cat}', -1)">&#10094;</button>
            </div>
        `;

        const scrollContainer = section.querySelector('.car-row-scroll');

        // 3. Fill the row with photos
        photos.filter(p => p.category === cat).forEach(photo => {
            const item = document.createElement('div');
            item.className = 'car-card';
            item.innerHTML = `
                <a href="${photo.folder}/${photo.name}" class="glightbox">
                    <img src="poze_site_vinero_thumbnail/${photo.name}" alt="${photo.alt}">
                </a>
            `;
            scrollContainer.appendChild(item);
        });

        galleryGrid.appendChild(section);
    });

    lightbox.reload();
}

// 4. Scroll Logic
function scrollRow(cat, direction) {
    const container = document.getElementById(`scroll-${cat}`);
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}
