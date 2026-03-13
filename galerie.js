const photos = [
    { name: 'IMG_6485.webp', folder: 'poze_galerie/full/Renault_Master_2024', category: 'Renault Master 2024', alt: 'Husa Autoutilitara Renault Master 2024 1'},
    { name: 'IMG_6486.webp', folder: 'poze_galerie/full/Renault_Master_2024', category: 'Renault Master 2024', alt: 'Husa Autoutilitara Renault Master 2024 2'},
    { name: 'IMG_6493.webp', folder: 'poze_galerie/full/Renault_Master_2024', category: 'Renault Master 2024', alt: 'Husa Autoutilitara Renault Master 2024 3'},

    { name: 'IMG_8639.webp', folder: 'poze_galerie/full/Renault_Master_2025', category: 'Renault Master 2025', alt: 'Husa Autoutilitara Renault Master 2025 1'},
    { name: 'IMG_8640.webp', folder: 'poze_galerie/full/Renault_Master_2025', category: 'Renault Master 2025', alt: 'Husa Autoutilitara Renault Master 2025 2'},
    { name: 'IMG_8642.webp', folder: 'poze_galerie/full/Renault_Master_2025', category: 'Renault Master 2025', alt: 'Husa Autoutilitara Renault Master 2025 3'},
    { name: 'IMG_8643.webp', folder: 'poze_galerie/full/Renault_Master_2025', category: 'Renault Master 2025', alt: 'Husa Autoutilitara Renault Master 2025 4'},

    { name: '74527d2c-6e79-4fce-b72b-be06507b8729.webp', folder: 'poze_galerie/full/ambulanta', category: 'Volkswagen Crafter 2025', alt: 'Husa autoutilitara ambulanta Volkswagen Crafter 2025 1'},
    { name: 'fc8efd90-acfa-4455-976e-1e4841b70525.webp', folder: 'poze_galerie/full/ambulanta', category: 'Volkswagen Crafter 2025', alt: 'Husa autoutilitara ambulanta Volkswagen Crafter 2025 2'},

    { name: 'IMG_0137.webp', folder: 'poze_galerie/full/Skoda_Octavia_4', category: 'Skoda Octavia IV', alt: 'Husa Skoda Octavia IV 1'},
    { name: 'IMG_0138.webp', folder: 'poze_galerie/full/Skoda_Octavia_4', category: 'Skoda Octavia IV', alt: 'Husa Skoda Octavia IV 2'},
    { name: 'IMG_0139.webp', folder: 'poze_galerie/full/Skoda_Octavia_4', category: 'Skoda Octavia IV', alt: 'Husa Skoda Octavia IV 3'},
    { name: 'IMG_0149.webp', folder: 'poze_galerie/full/Skoda_Octavia_4', category: 'Skoda Octavia IV', alt: 'Husa Skoda Octavia IV 4'},
    { name: 'IMG_0155.webp', folder: 'poze_galerie/full/Skoda_Octavia_4', category: 'Skoda Octavia IV', alt: 'Husa Skoda Octavia IV 5'},

    { name: 'IMG_0693.webp', folder: 'poze_galerie/full/Skoda_Kamiq_Active_2020', category: 'Skoda Kamiq Active 2020', alt: 'Husa Skoda Kamiq Active 2020 1'},
    { name: 'IMG_0700.webp', folder: 'poze_galerie/full/Skoda_Kamiq_Active_2020', category: 'Skoda Kamiq Active 2020', alt: 'Husa Skoda Kamiq Active 2020 2'},
    { name: 'IMG_0702.webp', folder: 'poze_galerie/full/Skoda_Kamiq_Active_2020', category: 'Skoda Kamiq Active 2020', alt: 'Husa Skoda Kamiq Active 2020 3'},

    { name: 'IMG_8126.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 1' },
    { name: 'IMG_8127.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 2' },
    { name: 'IMG_8128.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 3' },
    { name: 'IMG_8132.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 4' },
    { name: 'IMG_8133.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 5' },
    { name: 'IMG_8138.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 6' },
    { name: 'IMG_8139.webp', folder: 'poze_galerie/full/Dacia_Sandero_Stepway', category: 'Dacia Sandero Stepway', alt: 'Husa Dacia Sandero Stepway 7' },

    { name: 'IMG_4967.webp', folder: 'poze_galerie/full/Korando_1', category: 'SsangYong Korando', alt: 'Husa Korando 1'},
    { name: 'IMG_4968.webp', folder: 'poze_galerie/full/Korando_1', category: 'SsangYong Korando', alt: 'Husa Korando 2'},
    { name: 'IMG_4969.webp', folder: 'poze_galerie/full/Korando_2', category: 'SsangYong Korando', alt: 'Husa Korando 3'},
    { name: 'IMG_4970.webp', folder: 'poze_galerie/full/Korando_2', category: 'SsangYong Korando', alt: 'Husa Korando 4'},
    { name: 'IMG_4971.webp', folder: 'poze_galerie/full/Korando_2', category: 'SsangYong Korando', alt: 'Husa Korando 5'},

    { name: 'IMG_1151.webp', folder: 'poze_galerie/full/Skoda_Scala_2020', category: 'Skoda Scala 2020', alt: 'Husa Skoda Scala 2020 1'},
    { name: 'IMG_1157.webp', folder: 'poze_galerie/full/Skoda_Scala_2020', category: 'Skoda Scala 2020', alt: 'Husa Skoda Scala 2020 2'},
    { name: 'IMG_1159.webp', folder: 'poze_galerie/full/Skoda_Scala_2020', category: 'Skoda Scala 2020', alt: 'Husa Skoda Scala 2020 3'},
    { name: 'IMG_1182.webp', folder: 'poze_galerie/full/Skoda_Scala_2020', category: 'Skoda Scala 2020', alt: 'Husa Skoda Scala 2020 4'},

    
    { name: 'IMG_0523.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Husa Audi A4 Piele 1' },
    { name: 'IMG_0519.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Husa Audi A4 Piele 2' },
    { name: 'IMG_0522.webp', folder: 'poze_galerie/full/Audi_A4_2020', category: 'Audi A4 2020', alt: 'Husa Audi A4 Piele 3' },
    
    { name: 'IMG_9651.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero / Logan 2020', alt: 'Husa Dacia Sandero Logan 2020 1' },
    { name: 'IMG_9655.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero / Logan 2020', alt: 'Husa Dacia Sandero Logan 2020 2' },
    { name: 'IMG_9656.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero / Logan 2020', alt: 'Husa Dacia Sandero Logan 2020 3' },
    { name: 'IMG_9657.webp', folder: 'poze_galerie/full/Dacia_Sandero_Logan_2020', category: 'Dacia Sandero / Logan 2020', alt: 'Husa Dacia Sandero Logan 2020 4' },

    { name: 'IMG_9911.webp', folder: 'poze_galerie/full/Renault_Captur_2020', category: 'Renault Captur 2020', alt: 'Husa Renault Captur 2020 1' },
    { name: 'IMG_9912.webp', folder: 'poze_galerie/full/Renault_Captur_2020', category: 'Renault Captur 2020', alt: 'Husa Renault Captur 2020 2' },
    { name: 'IMG_9913.webp', folder: 'poze_galerie/full/Renault_Captur_2020', category: 'Renault Captur 2020', alt: 'Husa Renault Captur 2020 3' },
    { name: 'IMG_9916.webp', folder: 'poze_galerie/full/Renault_Captur_2020', category: 'Renault Captur 2020', alt: 'Husa Renault Captur 2020 4' },

    { name: 'image1.webp', folder: 'poze_galerie/full/SSANGYONG_TIVOLI', category: 'SsangYong Tivoli', alt: 'Husa SsangYong Tivoli 1'},
    { name: 'image2.webp', folder: 'poze_galerie/full/SSANGYONG_TIVOLI', category: 'SsangYong Tivoli', alt: 'Husa SsangYong Tivoli 2'},
    { name: 'image3.webp', folder: 'poze_galerie/full/SSANGYONG_TIVOLI', category: 'SsangYong Tivoli', alt: 'Husa SsangYong Tivoli 3'},

    { name: 'IMG_1435.webp', folder: 'poze_galerie/full/Skoda_Kamiq_2020', category: 'Skoda Kamiq 2020', alt: 'Husa Skoda Kamiq 2020 1'},
    { name: 'IMG_1437.webp', folder: 'poze_galerie/full/Skoda_Kamiq_2020', category: 'Skoda Kamiq 2020', alt: 'Husa Skoda Kamiq 2020 2'},
    { name: 'IMG_1439.webp', folder: 'poze_galerie/full/Skoda_Kamiq_2020', category: 'Skoda Kamiq 2020', alt: 'Husa Skoda Kamiq 2020 3'},

    { name: 'IMG_9918.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 1'},
    { name: 'IMG_9921.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 2'},
    { name: 'IMG_9922.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 3'},
    { name: 'IMG_9923.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 4'},
    { name: 'IMG_9924.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 5'},
    { name: 'IMG_9926.webp', folder: 'poze_galerie/full/Suzuki_S-Cross', category: 'Suzuki S-Cross', alt: 'Husa Suzuki S-Cross 6'},


    //{ name: 'IMG_8939.webp', folder: 'poze_galerie/full/Suzuki_Vitara', category: 'Suzuki Vitara', alt: 'Husa Suzuki Vitara 1'},
    //{ name: 'IMG_8940.webp', folder: 'poze_galerie/full/Suzuki_Vitara', category: 'Suzuki Vitara', alt: 'Husa Suzuki Vitara 2'},
    //{ name: 'IMG_8942.webp', folder: 'poze_galerie/full/Suzuki_Vitara', category: 'Suzuki Vitara', alt: 'Husa Suzuki Vitara 3'},
    //{ name: 'IMG_8944.webp', folder: 'poze_galerie/full/Suzuki_Vitara', category: 'Suzuki Vitara', alt: 'Husa Suzuki Vitara 4'},
    //{ name: 'IMG_8945.webp', folder: 'poze_galerie/full/Suzuki_Vitara', category: 'Suzuki Vitara', alt: 'Husa Suzuki Vitara 5'},



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
        <button class="nav-btn prev" onclick="scrollRow('${scrollId}', -1)">&#10094;</button>
        <div class="car-row-scroll" id="scroll-${scrollId}">
            </div>
        <button class="nav-btn next" onclick="scrollRow('${scrollId}', 1)">&#10095;</button>
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
        const card = container.querySelector('.car-card');
        const cardWidth = card ? card.offsetWidth + 15 : 300; // card + gap
        
        container.scrollBy({ 
            left: cardWidth * direction, 
            behavior: 'smooth' 
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
