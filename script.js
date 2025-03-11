// Встроенные данные из metadata.json
const metadata = [
    {
        "filename": "image1.jpg",
        "description": "Портрет рыжей девушки",
        "theme": "Люди"
    },
    {
        "filename": "image2.jpg",
        "description": "Городской пейзаж",
        "theme": "Пейзаж"
    },
    {
        "filename": "image3.jpg",
        "description": "Милый кот",
        "theme": "Животные"
    },
    {
        "filename": "image4.jpg",
        "description": "Натюрморт с грушами",
        "theme": "Натюрморт"
    },
    {
        "filename": "image5.jpg",
        "description": "Красивый кот",
        "theme": "Животные"
    },
    {
        "filename": "image6.jpg",
        "description": "Красивый пейзаж",
        "theme": "Пейзаж"
    },
    {
        "filename": "image7.jpg",
        "description": "Морской пейзаж",
        "theme": "Пейзаж"
    },
    {
        "filename": "image8.jpg",
        "description": "Девушка на белом фоне",
        "theme": "Люди"
    },
    {
        "filename": "image9.jpg",
        "description": "Байкал",
        "theme": "Пейзаж"
    },
    {
        "filename": "image10.jpg",
        "description": "Рыжая девочка с косичками",
        "theme": "Люди"
    },
    {
        "filename": "image11.jpg",
        "description": "Белый котенок",
        "theme": "Животные"
    },
    {
        "filename": "image12.jpg",
        "description": "Черный кот",
        "theme": "Животные"
    },
    {
        "filename": "image13.jpg",
        "description": "Зарянка",
        "theme": "Животные"
    },
    {
        "filename": "image14.jpg",
        "description": "Белка",
        "theme": "Животные"
    },
    {
        "filename": "image15.jpg",
        "description": "Олененок",
        "theme": "Животные"
    }
];

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
        console.log(`Изображение ${imageSrc} загружено`);
        callback(true);
    };
    img.onerror = function () {
        console.error(`Изображение ${imageSrc} не найдено`);
        callback(false);
    };
    img.src = imageSrc;
}

// Генерация списка изображений и добавление в галерею
function loadGallery() {
    const gallery = document.getElementById("gallery");

    // Проходим по каждому изображению
    metadata.forEach(item => {
        const imageSrc = `images/${item.filename}`;
        checkImageExists(imageSrc, (exists) => {
            if (exists) {
                const tag = `#${item.theme.toLowerCase()}`; // Формируем тег из темы
                const description = item.description; // Описание из JSON
                const imageCard = createImageCard(imageSrc, item.filename, tag, description);
                gallery.appendChild(imageCard);
            } else {
                console.error(`Изображение ${imageSrc} не найдено`);
            }
        });
    });
}

// Загружаем галерею
loadGallery();