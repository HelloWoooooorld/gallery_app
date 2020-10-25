export  function generateImage(photo, imgName, imgId) {
  const imageItem = document.createElement('div')
  // create container for img

  const img = document.createElement('img')
  // create img

  const div = document.createElement('div')
  // create container for caption

  const caption = document.createElement('h4')
  // create caption

  const trash = document.createElement('i')
  const edit = document.createElement('i')
  const buttonTrash = document.createElement('div')
  const buttonEdit = document.createElement('div')
  // create button and tag i for icon

  buttonEdit.setAttribute('role', 'button')
  buttonTrash.setAttribute('role', 'button')
  buttonEdit.setAttribute('tabIndex', '0')
  buttonTrash.setAttribute('tabIndex', '0')
  imageItem.setAttribute('id', imgId)
  // setAttribute fom button

  imageItem.classList.add('img__item')
  trash.classList.add('fa', 'fa-trash-alt')
  edit.classList.add('fas', 'fa-pencil-alt')
  buttonTrash.classList.add('btn__item', 'btn__item--delete')
  buttonEdit.classList.add('btn__item', 'btn__item--edit')
  div.classList.add('caption')
  // add class

  img.setAttribute('src', URL.createObjectURL(photo))
  imageItem.setAttribute('href', URL.createObjectURL(photo))
  // set image url

  // add name to caption
  caption.innerHTML = imgName

  // append icon to btn
  buttonTrash.append(trash)
  buttonEdit.append(edit)

  // append caption to img
  div.append(caption)

  // appent components to container
  imageItem.append(img)
  imageItem.append(div)
  imageItem.append(buttonTrash)
  imageItem.append(buttonEdit)

  // append container to layout
  document.getElementById('lightgallery').append(imageItem)
  document.getElementById('lightgallery').append(imageItem)

  $('#lightgallery').data('lightGallery').destroy(true)
  $('#lightgallery').lightGallery()
}

export default generateImage