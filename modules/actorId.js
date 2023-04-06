import { getData } from "/modules/http.request";
const actor_id = location.search.split("=").at(-1);
let img = document.querySelector('img')
getData(`person/${actor_id}/popular`).then((res) => {
   img.src = `${import.meta.env.VITE_IMG_URL}${item.profile_path}`
   
});