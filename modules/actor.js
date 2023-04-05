import { getData } from "/modules/http.request";
let kinoCont = document.querySelector('.kino-container')

getData(`person/popular`)
   .then(res => actorsReload(res.data.results))


function actorsReload(arr) {
   console.log(arr);
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

      for (let item of elem.known_for) {
         rayting.innerHTML = elem.vote_average;
         ray.innerHTML = elem.vote_average;
         kinoName.innerHTML = item.original_tile;
         kinoType.innerHTML = elem.release_date;
         hoverBtn.innerHTML = "Карточка фильма";

         kinocont.classList.add("kino-cont");
         kino.classList.add("kino");
         hover.classList.add("hover");
         ray.classList.add("ray");
         hoverBtn.classList.add("info-card");
         rayting.classList.add("rayting");
         kinoType.classList.add("type-kino");

         kino.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${elem.profile_path})`;

         hoverBtn.onclick = () => {
            location.assign('/pages/movieid.html?id=' + elem.id)
         }
      }



      kinoCont.append(kinocont);
      infoKino.append(hoverBtn);
      kinocont.append(kino, kinoName, kinoType);
      hover.append(ray, infoKino);
      kino.append(rayting, hover);
   });
}