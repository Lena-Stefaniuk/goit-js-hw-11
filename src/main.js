import { renderImages } from "./js/render-functions.js";
import { getPixabayImages } from "./js/pixabay-api.js";

const arrayImages = getPixabayImages();

renderImages(arrayImages)