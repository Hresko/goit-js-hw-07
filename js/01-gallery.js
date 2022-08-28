import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createMarkupGalary = galleryArrey =>
    galleryArrey
        .map(
            ({ preview, original, description }) =>
                `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
                </div>`
        )
        .join('');

gallery.innerHTML = createMarkupGalary(galleryItems);

let modalWindow = null;

const showLightboxModal = ({ alt, dataset: { source } }) => {
    modalWindow = basicLightbox.create(`<img style="color: #fff" src="${source}" alt="${alt}" width="800" height="600">`, {
        onShow: addKeyboardControls,
        onClose: removeKeyboardControls,
    });

    modalWindow.show();
};

const addKeyboardControls = () => window.addEventListener('keydown', onWindowKeyDown);
const removeKeyboardControls = () => window.removeEventListener('keydown', onWindowKeyDown);

const onWindowKeyDown = ({ code }) => {
    if (code != 'Escape') return;

    modalWindow.close();
}

const onGalleryContainerClick = event => {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') return;
    showLightboxModal(event.target);
};

gallery.addEventListener('click', onGalleryContainerClick);
