import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('ul.gallery');

const createGalleryMarkup = galleryData =>
  galleryData
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join('');

galleryContainerRef.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('ul.gallery a', {
  overlayOpacity: 0.85,
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
  alertError: false,
  maxZoom: 3,
});