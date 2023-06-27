$(function () {
    $('.marquee').marquee({
        duration: 17000,
        startVisible: true,
        duplicated: true
    });
});


function setHeader() {
    let headerText = `
    <h2 class='title-2 marquee'
    style='overflow:hidden'>
    — 15% НА ПЕРВЫЙ ЗАКАЗ ПО ПРОМОКОДУ «START»
    — 15% НА ПЕРВЫЙ ЗАКАЗ ПО ПРОМОКОДУ «START»
    — 15% НА ПЕРВЫЙ ЗАКАЗ ПО ПРОМОКОДУ «START»
</h2>

    `;

    let animation = document.createElement("div");
    animation.innerHTML = headerText;
    document.body.insertAdjacentElement('afterbegin', animation);
}

setHeader();
