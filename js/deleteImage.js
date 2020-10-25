import getAll from './getAll'

export function deleteImage(target,db) {
    db.photos
      .delete(target.parentElement.id)
      .then(() => {
        document.getElementById('lightgallery').innerHTML = ''
      })
      .then(() => {
        $('#lightgallery').data('lightGallery').destroy(true)
        $('#lightgallery').lightGallery()
        getAll(db)
      })
      .then(() => console.log('DELETED'))
  }

  export default deleteImage