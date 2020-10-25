import {generateImage} from './generateImage'

export function getAll(db) {
  let collection = db.photos
  collection.each(function (photo) {
    console.log(photo)
    generateImage(photo.data, photo.name, photo.id)
  })
}

export default getAll