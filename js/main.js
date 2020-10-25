import findImg from './findImg'
import getAll from './getAll'
import save from './saveImage'
import deleteImage from './deleteImage'
import {updateImage, closePopup} from './updateImage'

// create db
const db = new Dexie('photos_database')
db.version(11).stores({
  photos: '++id,name,date,size,type',
})

$('#lightgallery').lightGallery()

// load function get all
document.addEventListener('DOMContentLoaded', getAll(db))
document.getElementById('file').addEventListener('change', (event) => { save(event,db)})
document.getElementById('findImage').addEventListener('keyup', findImg())
document.querySelector('.popup__btn--close').addEventListener('click', closePopup)

// delete image and update
const events = {
  'btn__item btn__item--delete': (target) => deleteImage(target,db),
  'btn__item btn__item--edit': (target) => updateImage(target,db),
}

document.addEventListener(
  'click',
  (event) => {
    let target = event.target
    let array = Object.keys(events)
    if (array.indexOf(target.className) === -1) return
    event.stopImmediatePropagation()
    events[target.classList](target)
  },
  true
)
