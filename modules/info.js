import { getData } from "/modules/http.request";
import { actorsHeader } from "/modules/header";
import { header } from "/modules/header";





let iframe = document.querySelector("iframe");
const movie_id = location.search.split("=").at(-1);
let film_img = document.querySelector('.film_img')
let films_main = document.querySelector('.films_main')
let title = document.querySelector(".title")
let sub_title = document.querySelector(".sub_title")
let description = document.querySelector(".description")
let grid = document.querySelector('.grid')
let film_btn = document.querySelector(".film_btn")
let directors_box = document.querySelector('.directors_box')
let actors_header_box = document.querySelector('.actors_header_box')
let sub_trailer = document.querySelector(".sub_trailer")
let headers = document.querySelector(".headers")
let show_all = document.querySelector('.show_all')
let scroll_trailers = document.querySelector(".scroll-trailers");
let body = document.body

let kinoCont = document.querySelector('.kino-container')
console.log(kinoCont);
let locData = JSON.parse(localStorage.getItem('users'))



// getData(`movie/upcoming`).then((res) => console.log(res));

getData(`movie/${movie_id}`)
    .then(res => {
        let reses = res.data
        sub_trailer.innerHTML = reses.title
        sub_title.innerHTML = reses.tagline
        title.innerHTML = reses.title
        description.innerHTML = reses.overview
        body.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${res.data.backdrop_path})`;
        film_img.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${res.data.poster_path})`;
    })

getData(`movie/${movie_id}/videos`).then((res) => {
    let video = res.data.results[0];
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
});


getData(`movie/${movie_id}/credits`)
    .then(res => setCast(res.data.cast.slice(0, 10)))


show_all.onclick = () => {
    getData(`movie/${movie_id}/credits`)
        .then(res => setCast(res.data.cast))

}

function setCast(arr) {
    grid.innerHTML = ""
    for (let item of arr) {
        grid.innerHTML += `
        <div class="elem">
        <div style="background-image: url(${import.meta.env.VITE_IMG_URL}${item.profile_path});" class="img"></div>
        <span class="name_ac">${item.name}</span>
        <span class="name_acs">${item.character}</span>
      </div>`
    }
}

header(headers)


getData(`movie/${movie_id}/credits`)
    .then((res) => res.data.crew.filter(item => {
        if (item.job.split(" ")[0] === "Director") {
            let direct = []
            direct.push(item)
            resCredits(direct)
            console.log(item);
        }
    }))

function resCredits(arr) {
    directors_box.innerHTML = ""
    for (let item of arr) {
        console.log(item);
        directors_box.innerHTML += `
        <div class="directors_img">
        <div class="img"></div>
        <div class="names">
          <span>${item.name}</span>
          <span class="origin_name">${item.original_name}</span>

          <span style="color: #F2F60F;" >Режисёр</span>
        </div>
      </div>
      <div class="directors_img">
      <div class="img"></div>
        <div class="names">
          <span>${item.name}</span>
          <span class="origin_name">${item.original_name}</span>
        
          <span style="color: #F2F60F;" >Режисёр</span>
        </div>
      </div>
      <div class="directors_item">
        <h3>Производство</h3>
        <ol style="color: #F2F60F;" >
          <li>
          ${item.original_name}
          </li>
          <li>
          ${item.known_for_department}
          </li >
            <li>
            ${item.job}
            </li>
        </ol >
      </div >
            <div class="directors_item">
                <h3>Спецэффекты</h3>
                <ol style="color: #F2F60F;" >
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>

        `
        let img = document.querySelector('.img')
        img.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.profile_path})`;
    }

}


function origin(elem) {
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: "smooth"
    })

}
film_btn.onclick = () => {
    origin(iframe)
}
actorsHeader(actors_header_box)




function posters(arr, place) {
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

getData(`
/movie/${movie_id}/recommendations`).then((res) => posters(res.data.results, scroll_trailers));


getData(`movie/${movie_id}/images`).then((res) => {
    console.log(res);
});



if (locData) {
    for (let id of locData) {
        getData(`/movie/${id}`)
            .then(res => reload(res.data))
    }
}


export function reload(elem) {
    //   let rnd = Math.floor(Math.random() * arr.length - 1);
    //   body.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${
    //     arr[rnd].backdrop_path
    //   })`;

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

    kino.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${elem.poster_path
        })`;

    hoverBtn.onclick = () => {
        location.assign("/pages/movieid.html?id=" + elem.id);
    };

    ray.onclick = () => {
        saveds.push(elem.id);
        localStorage.setItem("users", JSON.stringify(saveds));
    };

    kinoCont.append(kinocont);
    infoKino.append(hoverBtn);
    kinocont.append(kino, kinoName, kinoType);
    hover.append(ray, infoKino);
    kino.append(rayting, hover);
}



