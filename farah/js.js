// script.js
document.addEventListener("DOMContentLoaded", function() {
    const showImagesButton = document.getElementById("showImagesButton");
    const imageContainer = document.getElementById("k1");

    showImagesButton.addEventListener("click", function() {
        imageContainer.classList.toggle("but1");
    });
});
// script.js
document.addEventListener("DOMContentLoaded", function() {
    const showImagesButton = document.getElementById("showImagesButton2");
    const imageContainer = document.getElementById("k2");

    showImagesButton.addEventListener("click", function() {
        imageContainer.classList.toggle("but2");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const showImagesButton = document.getElementById("showImagesButton3");
    const imageContainer = document.getElementById("k3");

    showImagesButton.addEventListener("click", function() {
        imageContainer.classList.toggle("but3");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const showImagesButton = document.getElementById("showImagesButton4");
    const imageContainer = document.getElementById("k4");

    showImagesButton.addEventListener("click", function() {
        imageContainer.classList.toggle("but4");
    });
});
const images = document.querySelectorAll('#imageContainer img');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].style.display = 'inline';
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        setInterval(showNextImage, 1500); // Contoh: setiap 3 detik
