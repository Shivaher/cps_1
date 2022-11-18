if(window.innerWidth < 768) {
  new Swiper ('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {el: '.swiper-pagination'},
  
    slidesPerView: 1.15,
  });
}

// Modal windows

let BlurBody = document.querySelector('.blur')
let body = document.querySelector('.blur-bg')

// Клик по бургеру

let sidebarModal = document.querySelector('.sidebar')
let openSidebar = document.querySelector('.burger-navigation')
let closeSidebar = document.querySelector('.burger-close-navigation')

openSidebar.addEventListener('click', blurIt);
closeSidebar.addEventListener('click', DontBlur);

function blurIt() {
  body.classList.add('blur');
  sidebarModal.classList.add('sidebar-open');
  body.classList.add('scroll-hidden')
}

function DontBlur() {
  body.classList.remove('blur');
  sidebarModal.classList.remove('sidebar-open')
  body.classList.remove('scroll-hidden')
}

// Feedback modal

let feedbackModal = document.querySelector('.sidebar-feedback');
let openFeedback = document.querySelectorAll('.feedback-navigation');
let closeFeedback = feedbackModal.querySelector('.feedback-close');

openFeedback.forEach((evt) => {
  evt.addEventListener('click', openModalFeedback);
});

closeFeedback.addEventListener('click', closeModalFeedback);

function openModalFeedback() {
  body.classList.add('blur');
  feedbackModal.classList.add('sidebar-open');
  sidebarModal.classList.add('blur');
  sidebarModal.classList.remove('sidebar-open');
  body.classList.add('scroll-hidden')
}

function closeModalFeedback() {
  body.classList.remove('blur');
  feedbackModal.classList.remove('sidebar-open');
  sidebarModal.classList.remove('blur');
  body.classList.remove('scroll-hidden')
}

// Phone-order modal

let phoneOrderModal = document.querySelector('.sidebar-phone-order');
let openPhoneOrder = document.querySelectorAll('.call-navigation');
let closePhoneOrder = phoneOrderModal.querySelector('.phone-order-close');

openPhoneOrder.forEach((evt) => {
  evt.addEventListener('click', openModalPhone);
});

closePhoneOrder.addEventListener('click', closeModalPhone);

function openModalPhone() {
  body.classList.add('blur');
  phoneOrderModal.classList.add('sidebar-open');
  sidebarModal.classList.add('blur');
  sidebarModal.classList.remove('sidebar-open');
  body.classList.add('scroll-hidden')
}

function closeModalPhone() {
  body.classList.remove('blur');
  phoneOrderModal.classList.remove('sidebar-open');
  sidebarModal.classList.remove('blur');
  body.classList.remove('scroll-hidden')
}

// Клик по первой кнопке «Показать всё» (Бренды)

let showDown = document.querySelector('.show-down-btn');
let showDownImg = document.querySelector('.show-down-img');
let showContainers = document.querySelectorAll('.show-container')

showDown.addEventListener('click', showDowner);

function showDowner() {
    if(showDown.textContent === "Показать всё") {
	  for( let i = 0; i < showContainers.length; i++) { 
	    showContainers[i].style.display = "block";
    }
    showDown.textContent = "Скрыть";
        showDownImg.classList.add('reverse');
    } else {
      for( let i = 0; i < showContainers.length; i++) { 
        showContainers[i].style.display = "none";
      }
      showDown.textContent = "Показать всё";
        showDownImg.classList.remove('reverse');
    }
}
// Клик по второй кнопке «Показать всё» (Ремонт техники)

let showDown2 = document.querySelector('.show-down-btn2');
let showDownImg2 = document.querySelector('.show-down-img2');
let showContainers2 = document.querySelectorAll('.show-container2')

showDown2.addEventListener('click', showDowner2);
 
function showDowner2() {
  if(showDown2.textContent === "Показать всё") {
  for( let i = 0; i < showContainers2.length; i++) { 
    showContainers2[i].style.display = "block";
  }
  showDown2.textContent = "Скрыть";
      showDownImg2.classList.add('reverse');
  } else {
    for( let i = 0; i < showContainers2.length; i++) { 
      showContainers2[i].style.display = "none";
    }
    showDown2.textContent = "Показать всё";
      showDownImg2.classList.remove('reverse');
  }
}
