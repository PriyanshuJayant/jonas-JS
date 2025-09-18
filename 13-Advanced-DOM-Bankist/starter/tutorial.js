// ------------------------Event Listener--------------------------//
//  New Way of Listening Events
const h1 = document.querySelector('h1');
const alertH1 = function(e){
  alert('You are a Nigger Bitch ass!!!!');
  h1.removeEventListener('mouseenter',alertH1)
}
h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000)

//  Old Way of Listening Events

// const h4 = document.querySelector('h4');
// h4.onmouseenter = (e) => {
//   alert('You are Gay!!')
// }

//---------------------------Random Color Generator----------------------//
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0,255)},${randomInt(0,255)})`
console.log(randomColor(0,255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
}, true)
document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  e.stopPropagation();
})
document.querySelector('.nav').addEventListener('click', function(e){
this.style.backgroundColor = randomColor();
})

//------------------------------------------------------------------------//
// const h1 = document.querySelector('h1');

// going downward: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

// Going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';

//  Going sideways: sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
const element = [...h1.parentElement.children].forEach(function(el){
  if (el !== h1) {el.style.transform = 'scale(0.5)'}
})
console.log(element);



document.addEventListener('DOMContentLoaded', function(e){
  // console.log('HTML Parsed and Dom tree built', e);
  
})
////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', (e) => {
  // console.log('Page Loaded', e);
})
// window.addEventListener('beforeunload', (e)=> {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
//   alert('Are you sure??');
// })