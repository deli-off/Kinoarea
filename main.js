import { header } from "./modules/header"
import { searchModal } from "./modules/modals"
import { authModal } from "./modules/modals"

let cont = document.querySelector('.container')
header(cont)

let auth_btn = document.querySelector('.auth-btn')
let search_btn = document.querySelector('.search-btn')


searchModal(search_btn)
authModal(auth_btn)



