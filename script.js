// ������� ��� ����������� ���� �� ���������
function getTagByPostfix(postfix) {
    switch (postfix) {
        case "hum":
            return "#����";
        case "anim":
            return "#��������";
        case "scen":
            return "#������";
        case "still":
            return "#���������";
        default:
            return "#������";
    }
}

// ������� ��� �������� �������� ����������� � ������
function createImageWrapper(imageSrc, altText, tag) {
    const wrapper = document.createElement("div");
    wrapper.className = "image-wrapper";

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = altText;

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";
    tooltip.textContent = tag;

    wrapper.appendChild(img);
    wrapper.appendChild(tooltip);

    return wrapper;
}

// ������� ��� �������� ������������� �����������
function checkImageExists(imageSrc, callback) {
    const img = new Image();
    img.onload = function () {
        callback(true); // ����������� ����������
    };
    img.onerror = function () {
        callback(false); // ����������� �� ����������
    };
    img.src = imageSrc;
}

// ��������� ������ ����������� � ���������� � �������
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
                    const imageWrapper = createImageWrapper(imageSrc, fileName, tag);
                    gallery.appendChild(imageWrapper);
                }
            });
        });
    }
}

// ��������� �������
loadGallery();