let searcmodal = document.querySelector('.search-modal')
let modalBg = document.querySelector('.modal-bg')
let closeModal = document.querySelector('.close-modal')
let authmodal = document.querySelector('.auth-modal')
let closeAuth = document.querySelector('.close')


export function searchModal(open) {
   open.onclick = () => {
      searcmodal.style.display = 'block'
      modalBg.style.display = 'block'
   }

   closeModal.onclick = () => {
      searcmodal.style.display = 'none'
      modalBg.style.display = 'none'
   }
}

export function authModal(op) {
   op.onclick = () => {
      authmodal.style.display = 'block'
      modalBg.style.display = 'block'
   }

   closeAuth.onclick = () => {
      authmodal.style.display = 'none'
      modalBg.style.display = 'none'
   }
}