'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////////////
//   Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// });

//  1. Adding event listener to common parent element
//  2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return; // Guard clause

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate clicked tab
  clicked.classList.add('operations__tab--active');

  // Activate related content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//  Button Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // Old Technique
  // window.scrollTo(
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // })
  //  New Technique
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////////////////////////////////

//  Menu fade animation

const handleHover = function(e, opacity){  
    if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('nav').querySelector('img');
    
    sibling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    // logo.stye.opacity = this;
  }
}

//  Passing argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////////////////////////////////////////////////////////////////
//  Sticky navigation
const obsCallback = function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
    
  })
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2]
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
;
observer.observe(section1);










const initialCords = section1.getBoundingClientRect()
// console.log(initialCords);


window.addEventListener('scroll', function(){
  // console.log(window.scrollY);
  if(window.scrollY > initialCords.top){
    nav.classList.add('sticky')
  }else{
    nav.classList.remove('sticky');
  }
  
})