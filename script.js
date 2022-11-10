new Swiper ('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {el: '.swiper-pagination'},
    slidesPerView: 'auto',

}
);

let showDown = document.querySelector('.show-down-btn');
let showDownImg = document.querySelector('.show-down-img');
let showContainers = document.querySelectorAll('.show-container')

showDown.addEventListener('click', showDowner)


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

