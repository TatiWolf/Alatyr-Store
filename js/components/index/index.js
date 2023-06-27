function swipe () {
    let swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
    });
}

function allCatalog() {
    localStorage.clear()
    location.href='../catalog/catalog.html';
}
