// Функция для определения тега по постфиксу
function getTagByPostfix(postfix) {
    switch (postfix) {
        case "hum":
            return "#люди";
        case "anim":
            return "#животные";
        case "scen":
            return "#пейзаж";
        case "still":
            return "#натюрморт";
        default:
            return "#другое";
    }
}

// Функция для создания карточки изображения
function createImageCard(imageSrc, altText, tag, description) {
    const card = document.createElement("div");
    card.className = "image-card";

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = altText;

    const tagElement = document.createElement("div");
    tagElement.className = "image-tag";
    tagElement.textContent = tag;

    const descriptionElement = document.createElement("div");
    descriptionElement.className = "image-description";
    descriptionElement.textContent = description;

    card.appendChild(img);
    card.appendChild(tagElement);
    card.appendChild(descriptionElement);

    return card;
}

// Функция для проверки существования изображения
function checkImageExists(imageSrc, callback) {
    const img = new Image();
    img.onload = function () {
        callback(true); // Изображение существует
    };
    img.onerror = function () {
        callback(false); // Изображение не существует
    };
    img.src = imageSrc;
}

// Генерация списка изображений и добавление в галерею
function loadGallery() {
    const gallery = document.getElementById("gallery");

    for (let i = 1; i <= 15; i++) {
        const imageTypes = ["hum", "scen", "anim", "still"];
        imageTypes.forEach(type => {
            const imageSrc = `images/image${i}_${type}.jpg`;
            checkImageExists(imageSrc, (exists) => {
                if (exists) {
                    const fileName = imageSrc.split("/").pop();
                    const postfix = fileName.split("_")[1].split(".")[0];
                    const tag = getTagByPostfix(postfix);
                    const description = `Описание изображения ${fileName}`; // Здесь можно добавить логику для считывания метаданных
                    const imageCard = createImageCard(imageSrc, fileName, tag, description);
                    gallery.appendChild(imageCard);
                }
            });
        });
    }
}

// Загружаем галерею
loadGallery();