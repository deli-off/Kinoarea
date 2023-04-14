import { searchMethod } from "/modules/http.request";
let searchForm = document.forms.searchForm;
let searchInput = document.querySelector("#searchInput");
let films = document.querySelector('.films')

searchForm.onsubmit = (e) => {
  e.preventDefault();

  searchMethod("/search/multi", searchInput.value).then((res) =>
    {
        console.log(res.data.results);
        search_reload(res.data.results, films)
    }
  );
};

function search_reload(arr, place) {
  place.innerHTML = "";

  for (let {id, profile_path, overview,original_title, release_date, poster_path} of arr) {
    place.innerHTML += `
        <div class="box" id="${id}" >
            <div class="film-img">
                <img src="${import.meta.env.VITE_IMG_URL}${poster_path || profile_path || ""}" alt="serial">
            </div>
            <div class="film-info">
                <h3>${original_title} (${release_date})</h3>
                <p>Prison Break</p>
                <span>
                    ${overview}
                </span>
            </div>
            <div class="film-rayting">
                <span>8.40</span>
            </div>
        </div>
    `;
  }

  const boxes = document.querySelectorAll('.box')

  boxes.forEach(box => {
    box.onclick = () => {
        location.assign('/pages/movieid.html?id=' + box.id)
    }
  });

}
