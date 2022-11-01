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
        <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
`
    })
.join('');
}

console.log(galleryContainerEl);


galleryContainerEl.addEventListener("click", (evt) => {
    evt.preventDefault();
  

    if(event.target.nodeName !== 'IMG') {
      return;
    }
    
    const instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" >`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onModalClose);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onModalClose);
        },
      }
    );
    function onModalClose(evt) {
      if (evt.key === "Escape") instance.close();
    }
    instance.show();
  });
