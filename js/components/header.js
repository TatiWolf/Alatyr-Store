function setHeader() {
    let headerText = `<header class="header">
    <div class="section">
        <div class="container flex space-between">
            <div class="flex wrap max-400">
                <div class="mb-20 mr-20">
                    <button onclick="showList('catalog')"
                            class="animate-button dropdown link">каталог
                    </button>
                    <div id="catalog"
                         class="dropdown-content border">
                        <a class="link"
                           href="../catalog/catalog.html" onclick="transitionToType('1')">уход для лица</a>
                        <a class="link"
                           href="../catalog/catalog.html" onclick="transitionToType('2')">уход для волос</a>
                        <a class="link"
                           href="../catalog/catalog.html" onclick="transitionToType('0')">уход для тела</a>
                        <a class="link"
                           href="../catalog/catalog.html" onclick="transitionToType('3')">мерч</a>
                    </div>
                </div>
                <div>
                    <div>
                        <a href="../about/about.html">
                        <button class="animate-button dropdown link">о нас
                        </button>
                        </a>
                    </div>
                </div>
                <div>
                    <button onclick="showList('contact')"
                            class="animate-button dropdown link">контакты
                    </button>
                    <div id="contact"
                         class="dropdown-content border">
                        <a class="link"
                           href="../about/about.html">производство</a>
                        <a class="link"
                           href="https://spb.hh.ru/vacancy/81781547?from=vacancy_search_list&query=%D0%B2%D0%BA%D1%83%D1%81%D0%BD%D0%BE%20%D0%B8%20%D1%82%D0%BE%D1%87%D0%BA%D0%B0">карьера</a>
                        <a class="link"
                           href="../delivery/delivery.html">адреса магазинов</a>
                    </div>
                </div>

            </div>
            <a href="../index/index.html">
            <img src="../../../statics/img/logo/logo-title.svg"
                 alt="Логотип компании Альтаир">
            </a>
            <div class="flex wrap flex-end max-400 align-start">
                <a href="../404/404.html">
                    <button
                            class="animate-button mb-20 flex align-center dropdown link mr-20">
                        <svg width="40" class="mr-20" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg">
<path d="M14.1667 31.6667C13.6723 31.6667 13.1889 31.8133 12.7778 32.088C12.3667 32.3627 12.0462 32.7531 11.857 33.21C11.6678 33.6668 11.6183 34.1694 11.7147 34.6544C11.8112 35.1393 12.0493 35.5848 12.3989 35.9344C12.7486 36.2841 13.194 36.5222 13.679 36.6186C14.1639 36.7151 14.6666 36.6656 15.1234 36.4764C15.5802 36.2871 15.9707 35.9667 16.2454 35.5556C16.5201 35.1445 16.6667 34.6611 16.6667 34.1667C16.6667 33.5036 16.4033 32.8677 15.9345 32.3989C15.4656 31.9301 14.8297 31.6667 14.1667 31.6667ZM31.6667 26.6667H11.6667C11.2247 26.6667 10.8008 26.4911 10.4882 26.1785C10.1756 25.866 10 25.442 10 25C10 24.558 10.1756 24.1341 10.4882 23.8215C10.8008 23.5089 11.2247 23.3333 11.6667 23.3333H25.8184C26.9042 23.3299 27.9597 22.9747 28.8266 22.3208C29.6935 21.667 30.3251 20.7498 30.6267 19.7067L33.2684 10.4567C33.339 10.2088 33.3512 9.94787 33.3039 9.69448C33.2567 9.44109 33.1513 9.20211 32.9961 8.99633C32.8408 8.79055 32.64 8.62357 32.4093 8.50853C32.1787 8.39349 31.9245 8.33352 31.6667 8.33333H11.2334C10.8881 7.36169 10.2514 6.52022 9.41031 5.92368C8.5692 5.32715 7.56454 5.00459 6.53337 5H5.00004C4.55801 5 4.13409 5.17559 3.82153 5.48816C3.50897 5.80072 3.33337 6.22464 3.33337 6.66667C3.33337 7.10869 3.50897 7.53262 3.82153 7.84518C4.13409 8.15774 4.55801 8.33333 5.00004 8.33333H6.53504C6.89696 8.33449 7.24877 8.45284 7.5378 8.67066C7.82684 8.88849 8.03754 9.19407 8.13837 9.54167L8.39671 10.45V10.4583L11.1317 20.0283C9.85865 20.1644 8.68631 20.7837 7.85629 21.7585C7.02627 22.7333 6.60182 23.9894 6.67041 25.2679C6.73901 26.5463 7.29541 27.7498 8.22497 28.6302C9.15453 29.5106 10.3864 30.0009 11.6667 30H31.6667C32.1087 30 32.5327 29.8244 32.8452 29.5118C33.1578 29.1993 33.3334 28.7754 33.3334 28.3333C33.3334 27.8913 33.1578 27.4674 32.8452 27.1548C32.5327 26.8423 32.1087 26.6667 31.6667 26.6667ZM29.4567 11.6667L27.4234 18.79C27.3228 19.1382 27.1119 19.4443 26.8225 19.6625C26.5331 19.8807 26.1808 19.9991 25.8184 20H14.59L14.165 18.5133L12.21 11.6667H29.4567ZM27.5 31.6667C27.0056 31.6667 26.5222 31.8133 26.1111 32.088C25.7 32.3627 25.3796 32.7531 25.1903 33.21C25.0011 33.6668 24.9516 34.1694 25.0481 34.6544C25.1445 35.1393 25.3826 35.5848 25.7323 35.9344C26.0819 36.2841 26.5274 36.5222 27.0123 36.6186C27.4973 36.7151 27.9999 36.6656 28.4567 36.4764C28.9136 36.2871 29.304 35.9667 29.5787 35.5556C29.8534 35.1445 30 34.6611 30 34.1667C30 33.5036 29.7366 32.8677 29.2678 32.3989C28.799 31.9301 28.1631 31.6667 27.5 31.6667Z" />
</svg>
корзина
                    </button>
                </a>
                <a class="border p-16-30" href="../404/404.html">
                    <img style="width: 29px"
                         src="../../../statics/img/icons/user.svg"
                         alt="">
                </a>
                <div>
                    <button onclick="showList('delivery')"
                            class="dropdown link">доставка
                    </button>
                    <div id="delivery"
                         class="dropdown-content border">
                        <a class="link"
                           href="../delivery/delivery.html">условия доставки</a>
                        <a class="link"
                           href="../delivery/delivery.html">способы получения</a>
                        <a class="link"
                           href="../gift-card/gift-card.html">подарочные сертификаты</a>
                        <a class="link"
                           href="../gift-card/gift-card.html">клубная карта</a>
                        <a class="link"
                           href="../404/404.html">оплата</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

    let header = document.createElement("div");
    header.innerHTML = headerText;
    document.body.insertAdjacentElement('afterbegin', header);
}

setHeader();

function closeDropdown() {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function showList(type) {
    closeDropdown();
    document.getElementById(type).classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        closeDropdown();
    }
};


function transitionToType(type) {
    localStorage.setItem('type', type)
    location.href='../catalog/catalog.html';

}
