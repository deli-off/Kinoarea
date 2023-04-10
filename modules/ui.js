import { getData } from "/modules/http.request";
let kinoCont = document.querySelector(".kino-container");
let body = document.body;
let saveds = JSON.parse(localStorage.getItem('users')) || [];

getData('movie/popular').then((res) => reload(res.data.results));

export function reload(arr) {
  kinoCont.innerHTML = "";
  let rnd = Math.floor(Math.random() * arr.length - 1);
  body.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${
    arr[rnd].backdrop_path
  })`;

  arr.forEach((elem) => {
    let kinocont = document.createElement("div");
    let kino = document.createElement("div");
    let hover = document.createElement("div");
    let ray = document.createElement("div");
    let hoverBtn = document.createElement("button");
    let infoKino = document.createElement("div");
    let rayting = document.createElement("div");
    let kinoName = document.createElement("p");
    let kinoType = document.createElement("p");
    let img = document.createElement("img");

    rayting.innerHTML = elem.vote_average;
    ray.innerHTML = elem.vote_average;
    kinoName.innerHTML = elem.original_title;
    kinoType.innerHTML = elem.release_date;
    hoverBtn.innerHTML = "Карточка фильма";

    kinocont.classList.add("kino-cont");
    kino.classList.add("kino");
    hover.classList.add("hover");
    ray.classList.add("ray");
    hoverBtn.classList.add("info-card");
    rayting.classList.add("rayting");
    kinoType.classList.add("type-kino");

    kino.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${
      elem.poster_path
    })`;

    hoverBtn.onclick = () => {
      location.assign("/pages/movieid.html?id=" + elem.id);
    };

    ray.onclick = () => {
      if(!saveds.includes(elem.id)) {
        saveds.push(elem.id);
        localStorage.setItem("users", JSON.stringify(saveds));
      }
    };

    kinoCont.append(kinocont);
    infoKino.append(hoverBtn);
    kinocont.append(kino, kinoName, kinoType);
    hover.append(ray, infoKino);
    kino.append(rayting, hover);
  });
}
