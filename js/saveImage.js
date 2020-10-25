import { v4 as uuidv4 } from 'uuid'
import { generateImage } from './generateImage'

export function save(event,db) {
    const lg = document.getElementById('lightgallery')
    const ID = uuidv4()
    let file = event.target.files[0]
    generateImage(file, file.name, ID)
    db.photos
      .put(
        {
          name: file.name,
          date: new Date().toString(),
          size: file.size,
          type: file.type,
          data: file,
          id: ID,
        },
        ID
      )
      .then(() => {
        // Iterate all friends, ordered by id:
        return db.photos.each((photo) => console.log('data', photo))
      })
      .then(() => {
        $('#lightgallery').data('lightGallery').destroy(true)
        $('#lightgallery').lightGallery()
      })
      .catch(function (error) {
        console.log('Ooops: ' + error)
      })
  }

  export default save