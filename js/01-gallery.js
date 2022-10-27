import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems)
galleryContainerEl.insertAdjacentHTML('beforeend',galleryMarkup);

function createGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return  `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>
`
    })
.join('');
}

console.log(galleryContainerEl);




