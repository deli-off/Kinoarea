import { getData } from "/modules/http.request";
let actorCont = document.querySelector('.actors__container')

getData(`person/popular`)
   .then(res => actorsReload(res.data.results))


function actorsReload(arr) {
   console.log(arr);

   for (let item of arr) {
      let card = document.createElement('div')
      let card__title = document.createElement('span')

      card.classList.add('actor__item')

      card__title.innerHTML = item.name

      card.style.backgroundImage = `url(${import.meta.env.VITE_IMG_URL}${item.profile_path
         })`

      card.append(card__title)
      actorCont.append(card)

      card.onclick = () => {
         location.assign('/pages/actorid.html?id=' + item.id)
      }
   }
}