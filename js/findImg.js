 // function for find image by name

 export function findImg() {
  let input = document.getElementById('findImage')
  let filter = input.value.toUpperCase()
  const a = document.querySelectorAll('.img__item')
  const h4 = document.querySelectorAll('h4')
  for (let i = 0; i < h4.length; i++) {
    if (h4[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = ''
    } else {
      a[i].style.display = 'none'
    }
  }
}
export default findImg