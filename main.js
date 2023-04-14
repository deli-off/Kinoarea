import { header } from "./modules/header";
import { searchModal } from "./modules/modals";
import { authModal } from "./modules/modals";
import { getData } from "./modules/http.request";
import Swiper from "swiper";

let cont = document.querySelector(".container");
header(cont);

let auth_btn = document.querySelector(".auth-btn");
let search_btn = document.querySelector(".search-btn");
let scroll_trailers = document.querySelector(".scroll-trailers");
let trailer_video = document.querySelector("#trailer_video");
let carousel = document.querySelector(".swiper-wrapper");

searchModal(search_btn);
authModal(auth_btn);

getData(`movie/upcoming`).then((res) => trailers(res.data.results, scroll_trailers));
getData(`movie/popular`).then((res) => carousel_reload(res.data.results))


export function trailers(arr, place) {
  place.innerHTML = "";

  for (let item of arr) {
    let div = document.createElement("div");

    div.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.poster_path
      } )`;

    div.classList.add("item");

    place.append(div);

    div.onclick = () => {
      getData(`movie/${item.id}/videos`).then((res) => {
        let video = res.data.results[0];

        trailer_video.src = `https://www.youtube.com/embed/${video.key}?rel=0&autoplay=10`;
      });
    };
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function carousel_reload(arr) {
  for (let item of arr) {
    let div = document.createElement("div");

    div.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.poster_path
      } )`;
    div.classList.add("swiper-slide");

    carousel.append(div);
  }
}

