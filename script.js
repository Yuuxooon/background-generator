var _ = require('lodash')

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array, _.without(array, 3))

var css = document.querySelector('h3')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var body = document.getElementById('gradient')

function changeColor () {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'

  css.textContent = body.style.background + ';'
}

// color1.addEventListener('input', changeColor)
// color2.addEventListener('input', changeColor)
