let navToggle = document.querySelector('.navToggle');
let nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
});

let header = document.querySelector('header');

window.addEventListener('scroll', function () {
    let showMeScroll = scrollY;

    if (showMeScroll > 950) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow')
    }

    console.log(showMeScroll);
});

let swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    }, 
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});