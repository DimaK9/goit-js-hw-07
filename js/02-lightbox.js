import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((item) => {
    return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
 class="gallery__image"
 src="${item.preview}"
title="${item.description}"
alt="${item.description}"
width="900" height="650"
/>
 </a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
