import getAll from './getAll'
import { v4 as uuidv4 } from 'uuid'

export function updateImage(target,db) {
  const id = target.parentElement.id
  openPopup()
  document
    .querySelector('.popup__btn--submit')
    .addEventListener('click', () => {
      let newAdress = document.getElementById('adress').files[0]
      let newName = document.getElementById('name').value
      const ID = uuidv4()
      console.log(newName, newAdress)
      const file = {
        name: newName,
        date: new Date().toString(),
        size: newAdress.size,
        type: newAdress.type,
        data: newAdress,
        id: ID,
      }
      db.photos
        .update(id, file)
        .then(() => {
          document.getElementById('lightgallery').innerHTML = ''
        })
        .then(() => {
          $('#lightgallery').data('lightGallery').destroy(true)
          $('#lightgallery').lightGallery()
          getAll(db)
          closePopup()
        })
        .catch((err) => {
          console.log('error' + err)
        })
    })
}

export function openPopup() {
  document.querySelector('.popup').hidden = false
}
export function closePopup() {
  document.querySelector('.popup').hidden = true
}

export default {
  updateImage,
  closePopup,
}
