
var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 7000,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,

    },

    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1188: {
          slidesPerView: 3,
          spaceBetween: 5
        }
    }



	// loop: true,
	// grabCursor: true,
    // autoplay: {
    //     delay: 5000,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true

    //   },
    //   breakpoints: {
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 10
    //     },
    //     768: {
    //       slidesPerView: 2,
    //       spaceBetween: 10
    //     },
    //     1188: {
    //       slidesPerView: 3,
    //       spaceBetween: 5
    //     }
    //   }
    
    });

