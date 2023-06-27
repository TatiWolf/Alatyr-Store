function setPopUp() {
    let headerText = `
    <div class="section pop-up">
    <div class="container">
        <div class="border add-to-card center-column pop-up-wrap">
            <h3 class="title-3 text-center max-300"> Товар добавлен в корзину</h3>
            <div class="flex flex-column">
                <button class="link-button">продолжить покупки</button>
                <a href="../404/404.html"></a><button class="link-button">оформить заказ</button>
            </div>
        </div>
    </div>
</div>
`;
    let popUp = document.createElement("div");
    popUp.innerHTML = headerText;
    popUp.classList.add('show');
    document.body.insertAdjacentElement('beforeend', popUp);
    setTimeout(()=> {
        popUp.remove()
    }, 1000)
}
