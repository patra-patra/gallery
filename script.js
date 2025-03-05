// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');

    // Генерация путей к изображениям
    const images = [];
    for (let i = 1; i <= 15; i++) {
        images.push(`images/image${i}.jpg`);
    }

    // Отображение изображений в галерее
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Изображение ${image}`;
        imgElement.width = 300;

        gallery.appendChild(imgElement);
    });
});