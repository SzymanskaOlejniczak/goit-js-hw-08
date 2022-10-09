// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems)
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const newGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div><a class="gallery__item" 
    href="${original}">
    <img class="gallery__image" src="${preview}"
    alt="${description}"
    title="${description}" />
    </a>
    </div>
    `;
  })
  .join('');

const galleryPictures = document.querySelector('div.gallery');

galleryPictures.insertAdjacentHTML('beforeend', newGallery);
//new SimpleLightbox('.gallery a', { /* options */ });
const galleryLightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
