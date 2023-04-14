// console.log('asdasdasdad');
import { header } from "/modules/header";
import { searchModal } from "/modules/modals";
import { authModal } from "/modules/modals";
import { getData } from "/modules/http.request";

let contHedaer = document.querySelector(".containerTwo");

// console.log(contHedaer);

header(contHedaer);

let auth_btn = document.querySelector(".auth-btn");
let search_btn = document.querySelector(".search-btn");
searchModal(search_btn);
authModal(auth_btn);

let trailersContainer = document.querySelector('.trailersCont')
let modalFrame = document.querySelector('.modalMedia')
let modal_video = document.querySelector('#modalFrame')
let closeM = document.querySelector('.closeModal')
let posterCont = document.querySelector('.postersItem')
let modalPost = document.querySelector('.modalPost')

getData(`movie/upcoming`).then((res) => createTrailers(res.data.results, trailersContainer));

export function createTrailers(arr, place) {
  trailersContainer.innerHTML = ''
  for (let item of arr) {
    let div = document.createElement("div");

    div.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.poster_path
      } )`;

    div.classList.add("itemTrailer");

    place.append(div);

    div.onclick = () => {
      getData(`movie/${item.id}/videos`).then((res) => {
        openModal()
        let video = res.data.results[0];

        modal_video.src = `https://www.youtube.com/embed/${video.key}?rel=0&autoplay=10`;
      });
    };
  }
}

closeM.onclick = () => {
  closeModal()
}

function openModal() {
  modalFrame.style.display = 'block'

  setTimeout(() => {
    modalFrame.style.opacity = '1'
    modalFrame.style.transform = 'transform: translate(-50%, -50%) scale(1)'
  }, 200)
}


function closeModal() {
  modalFrame.style.display = 'none'
}



getData(`movie/popular`).then((res) => createPoster(res.data.results));

function createPoster(arr) {
  posterCont.innerHTML = ''
  for (let item of arr) {
    let div = document.createElement("div");

    div.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.poster_path
      } )`;

    div.classList.add("itemPoster");

    console.log(div);

    posterCont.append(div);

    div.onclick = () => {
      openModalTwo()

      modalPost.style.backgroundImage = `url${item.poster_path}`
    };
  }
}


function openModalTwo() {
  modalPost.style.display = 'block'

  setTimeout(() => {
    modalPost.style.opacity = '1'
    modalPost.style.transform = 'transform: translate(-50%, -50%) scale(1)'
  }, 200)
}


  // function closeModal () {
  //   modalFrame.style.display = 'none'
  // }
