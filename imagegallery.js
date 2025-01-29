let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Open Lightbox
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = images[index].src;
    lightbox.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Change Image (Next/Prev)
function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    lightboxImg.src = images[currentImageIndex].src;
}
