
function setFooter() {
    let headerText = `
    <footer class="footer">
    <div class="section">
        <div class="container flex space-between">
            <div class="footer-left">
                <div class="border add-to-card p-40">
                    <p class="title-3 "> Подпишись на рассылку и получи скидку 15%</p>
                    <div class="flex flex-column mt-30">
                        <input type="email"
                               class="link-button text-start"
                               placeholder="Email:">
                        <div class="checkbox-subscription">
                            <input id="done"
                            
                                   type="checkbox">
                            <label class="link-tiny"
                                   for="done">я согласен на все</label>
                        </div>
                        <button class="link-button title-3">подписаться</button>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <div class="flex space-between">
                    <div class="mr-20">
                        <h4 class="title-3">Каталог</h4>
                        <p class="link link-tiny text-gray mb-10" onclick="transitionToType('1')">уход для лица</p>
                        <p class="link link-tiny text-gray mb-10" onclick="transitionToType('2')">уход для волос</p>
                        <p class="link link-tiny text-gray mb-10" onclick="transitionToType('0')">уход для тела</p>
                        <p class="link link-tiny text-gray mb-10" onclick="transitionToType('3')">мерч</p>
                    </div>
                    <div class="mr-20">
                        <h4 class="title-3">О нас</h4>
                        <p class="mb-10" ><a href="../about/about.html" class=" link link-tiny text-gray">производство</a></p>
                        <p class="mb-10" ><a href="https://spb.hh.ru/vacancy/81781547?from=vacancy_search_list&query=%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D0%BE%20%D0%B8%20%D1%82%D0%BE%D1%87%D0%BA%D0%B0" class=" link link-tiny text-gray">карьера</a></p>
                        <p class="mb-10" ><a href="../delivery/delivery.html" class=" link link-tiny text-gray">адреса магазинов</a></p>
                    </div>
                    <div>
                        <h4 class="title-3">Доставка</h4>
                        <p class="mb-10" ><a href="../delivery/delivery.html" class=" link link-tiny text-gray">способы получения</a></p>
                        <p class="mb-10" ><a href="../gift-card/gift-card.html" class=" link link-tiny text-gray">подарочные сертификаты</a></p>
                        <p class="mb-10" ><a href="../gift-card/gift-card.html" class=" link link-tiny text-gray">клубная карта</a></p>
                        <p class="mb-10" ><a href="../404/404.html" class=" link link-tiny text-gray">оплата</a></p>
                    </div>
                </div>
                <div>
                    <h5 class="title-3">Возникли вопросы? Ответим!</h5>
                    <div class="flex space-between ">
                        <a class="footer-img-link flex align-center link link-tiny mr-20">
                            <img  src="../../../statics/img/icons/instagram.svg"
                                 alt="">
                            <p>alatyr.ru</p>
                        </a>
                        <a href="mailto:support@alatyr.com"
                           class="footer-img-link flex align-center link link-tiny mr-20">
                            <img  src="../../../statics/img/icons/envelope.svg"
                                 alt="">
                            <p>support@alatyr.com</p>
                        </a>
                        <a href="tel:+7 800 789 13 13"
                           class="footer-img-link flex align-center link link-tiny mr-20">
                            <img src="../../../statics/img/icons/phone.svg"
                                 alt="">
                            <p>+7 800 789 13 13</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    `;

    let footer = document.createElement("div");
    footer.innerHTML = headerText;
    document.body.insertAdjacentElement('beforeend', footer);
}

setFooter();
