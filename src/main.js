import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.querySelector(".form");
const input = document.querySelector(".searching-input");
const gallery = document.querySelector(".gallery-elements");

const imagesBackend = {
    webformatURL: "",
    largeImageURL: "",
    tags: "",
    likes: 0,
    views: 0,
    comments: 0,
    downloads: 0
};

const options = {
  method: "POST",
  body: JSON.stringify(imagesBackend),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
};

form.addEventListener("submit", event => {
    event.preventDefault();
    if (input.value != "") {
        const searchParams = new URLSearchParams({
            key: "44096290-4b282435e4320beb633e0ff8a",
            q: input.value,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true",
        });

        const url = `https://pixabay.com/api/?${searchParams}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(() => {
                const makingGallery = imagesBackend.map((imageBackend => {
                    const list = document.createElement('li');
                    const a = document.createElement('a');
                    const img = document.createElement('img');
                    a.href = imageBackend.largeImageURL;
                    img.src = imageBackend.webformatURL;
                    img.alt = imageBackend.tags;
                    a.appendChild(img);
                    list.appendChild(a);
                    return list;
                }));
                gallery.append(...makingGallery);
            })
            .catch((error) => console.log(error));
        
    } else {
        iziToast.show({
            message: 'Searching input cannot be empty! Please fill the input to start searching.',
            messageColor: 'rgba(255, 255, 255, 1)',
            messageSize: '16px',
            messageLineHeight: '24px',
            backgroundColor: 'rgba(239, 64, 64, 1)',
            position: 'topCenter',
            timeout: 2000
        });
    }
});