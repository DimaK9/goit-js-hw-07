import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems)

function createGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return  `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
`
    })
.join('');
}

galleryContainerEl.insertAdjacentHTML('beforeend',galleryMarkup);

console.log(galleryContainerEl);

const ligthBox = new SimpleLightbox(".galleryContainerEl a", {
    captionsData: "alt",
    captionDelay: 250,
  });

// const gallery = document.querySelector(".gallery");
// const markup = galleryItems
//   .map((item) => {
//     return `<a class = "gallery__link" href = "${item.original}">
//     <img
//  class="gallery__image"
//  src="${item.preview}"
// title="${item.description}"
// alt="${item.description}"
// width="900" height="650"
// />
//  </a>`;
//   })
//   .join("");

// gallery.insertAdjacentHTML("beforeend", markup);

// const ligthBox = new SimpleLightbox(".gallery a", {
//   captionDelay: 250,
// });
