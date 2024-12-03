// *** LIGHTBOX ***
const lightBox = document.querySelector("#lightbox");


const thumbnails = document.querySelectorAll("ul img");


thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {
        const fullImgSrc = thumbnail.dataset.fullImg;

        const lightBoxImg = lightBox.querySelector("img");
        lightBoxImg.src = fullImgSrc;


        lightBox.showModal();
    });
});


lightBox.addEventListener("click", () => {

    lightBox.close();
});