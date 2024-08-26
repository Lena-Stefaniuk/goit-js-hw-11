const gallery = document.querySelector('.gallery');


function addImage(image) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
}

function addImages(images) {
  return images.map(addImage).join(`\n`);
}

export function renderImages(arrayImagesURLs) {
    gallery.innerHTML = addImages(arrayImagesURLs);
}




