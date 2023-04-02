import { searchModal } from "./modals"
import { authModal } from "./modals"

export function header(place) {
    place.innerHTML += `<header class="header">
                    <div class="header__logo">
                        <div class="header__logo-wrapper">
                            <img src="./img/header-logo.svg" alt="logo">
                            <img src="./img/header-social.svg" alt="social">
                        </div>
                    </div>
                    <nav class="header__nav">
                        <ul class="header__nav-ul">
                            <li>
                                <a href="/">Афиша</a>
                            </li>
                            <li>
                                <a href="/">Медиа</a>
                            </li>
                            <li>
                                <a href="/">Фильмы</a>
                            </li>
                            <li>
                                <a href="/">Актёры</a>
                            </li>
                            <li>
                                <a href="/">Новости</a>
                            </li>
                            <li>
                                <a href="/">Подборки</a>
                            </li>
                            <li>
                                <a href="/">Категории</a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__search">
                        <button class="search-btn">
                            <img src="./img/search-icon.svg" alt="search">
                        </button>
                        <button type="button" class="auth-btn">
                            Войти
                        </button>
                    </div>
                </header>
   `

    let searchBtn = document.querySelector('.search-btn')
    let authBtn = document.querySelector('.auth-btn')
    searchBtn.onclick = () => {
        searchModal(searchBtn)
    }

    authBtn.ocnlick = () => {
        authModal(authBtn)
    }
}