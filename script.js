const swiper = new Swiper('.swiper', 
{
    direction: 'horizontal',
    loop: true,
    pagination: {el: '.swiper-pagination'},
    slidesPerView: 1.25
}
);

let cardContentWrapper = document.querySelector(".brands-menu-wrap");
let showDown = document.querySelector('.show-down-btn');
let showDownImg = document.querySelector('.show-down-img');
let showContainers = document.querySelector(".show-container")

// showDown.addEventListener('click', func1, showDowner);

function showDowner() {
    if(showDown.textContent === "Показать всё") {
        showDown.textContent = "Скрыть";
        showDownImg.classList.add('reverse');
    } else {
        showDown.textContent = "Показать всё";
        showDownImg.classList.remove('reverse');
    }
}

function func1() {
  if (showContainers.style.display !== 'none') {
    showContainers.style.display = "none";
  }else {
    showContainers.style.display = "block";
  }
};

console.log(showContainers);

// Не получается реализовать показ скрытых элементов. Показывается только один и то коряво, не пойму в чем причина. Направь меня, пожалуйста