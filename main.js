import { galleryImages } from "./galleryImages.js";

const gallery = document.querySelector(".gallery");

galleryImages.forEach((img) => {
  const image = document.createElement("img");
  image.src = img.src;
  image.alt = img.alt;
  gallery.appendChild(image);
});
const contactPanel = document.querySelector('.contact-content');
  const closeBtn = document.getElementById('close-contact');
  const form = document.getElementById('contact-form');


  console.log("closeBtn is:", closeBtn);  
  // Auto-open on load (mobile only)
  window.addEventListener('load', () => {
    if (window.innerWidth <= 768) {
      contactPanel.classList.add('open');
    }
  });

  closeBtn.addEventListener('click', () => {
    contactPanel.classList.remove('open');
  });
 

  form.addEventListener('submit', e => {
    e.preventDefault();
    contactPanel.classList.remove('open');
  });

