import { header } from "./modules/header"
import { searchModal } from "./modules/modals"
import { authModal } from "./modules/modals"
let cont = document.querySelector('.container')

header(cont)
searchModal()
authModal()