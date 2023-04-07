import { getData } from "/modules/http.request";

const actor_id = location.search.split("=").at(-1);
let img_cont = document.querySelector('.actor-info__left')

getData(`person/${actor_id}/tagged_images`)
.then((res) => {
   console.log(res);
   for(let item of res.data.results) {
      let img = document.createElement('img')

      img.src = `${import.meta.env.VITE_IMG_URL}${item.file_path}`

      img_cont.append(img)
   }  
});