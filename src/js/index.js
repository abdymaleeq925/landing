document.addEventListener('DOMContentLoaded', function() {
    const swiperTestimonial = new Swiper('.testimonial__wrapper.swiper', {
        spaceBetween: 5, 
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.arrow-next',
            prevEl: '.arrow-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
              loop: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
        },
    });
    
    const btn = document.querySelectorAll('.openModal');
    const modal = document.querySelector('.modal');
    const modalInner = document.querySelector('.modal-inner');
    const close = document.querySelector('.close');
    const body = document.getElementsByTagName('body')[0];

    // body.addEventListener('click', function(e) {
    //     console.log(e.target)
    // })

    btn.forEach(function(b) {
        b.addEventListener('click', function() {
            modal.style.display = 'flex';
            body.style.overflow = 'hidden';
        });
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
        body.style.overflow = 'unset';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            body.style.overflow = 'unset';
        }
    })
});


const accHeading = document.querySelectorAll('.faq__accordeon-heading');

accHeading.forEach((el) => {
    el.addEventListener('click', function() {
        const isActive = el.parentElement.classList.contains('active');
        accHeading.forEach((anotherEl) => {
            anotherEl.parentElement.classList.remove('active');
        });

        if(!isActive) {
            el.parentElement.classList.add('active');
        }
    });
});

const burgerMenu = document.querySelector('.header__burger'),
      closeMenu = document.querySelector('.close__btn'),
      navLinks = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', () => {
    navLinks.classList.remove('show-menu');
});

document.addEventListener('click', (e) => {
    // Проверяем, что клик был не на burgerMenu и не на его дочерних элементах,
    // а также не на navLinks и не на его дочерних элементах.
    if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('show-menu');
    }
});