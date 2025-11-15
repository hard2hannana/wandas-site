import { galleryImages } from "./galleryImages.js";

const gallery = document.querySelector(".gallery");

galleryImages.forEach((img) => {
  const image = document.createElement("img");
  image.src = img.src;
  image.alt = img.alt;
  gallery.appendChild(image);
});
