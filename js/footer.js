function changeChoices() {
    let done =  document.querySelector('#ok')
    if (done.classList.contains("hide")) {
    done.classList.remove('hide')
    } else {
        done.classList.add('hide')
    }

}
function setFooter() {
    let headerText = `
    <footer class="footer">
    <div class="section">
        <div class="container flex space-between wrap">
            <div class="footer-left">
                <div class="border add-to-card p-40">
                    <p class="title-3 "> Подпишись на рассылку и получи скидку 15%</p>
                    <div class="flex flex-column mt-30">
                        <input type="email"
                               class="link-button text-start"
                               placeholder="Email:">
                        <div class="checkbox-subscription">
                        <svg onclick="changeChoices()" style="margin-right: 15px;" xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
                        <rect x="1.5" y="1.58044" width="27" height="27" rx="4.5" stroke="white" stroke-width="3"/>
                        <path class="hide" id="ok" d="M26.1833 7.09712C26.0284 6.94091 25.8441 6.81692 25.641 6.7323C25.4379 6.64769 25.22 6.60413 25 6.60413C24.78 6.60413 24.5622 6.64769 24.3591 6.7323C24.156 6.81692 23.9716 6.94091 23.8167 7.09712L11.4 19.5305L6.18335 14.2971C6.02248 14.1417 5.83258 14.0195 5.62449 13.9375C5.4164 13.8555 5.19419 13.8153 4.97056 13.8192C4.74692 13.823 4.52624 13.8709 4.32111 13.9601C4.11598 14.0492 3.93042 14.1779 3.77502 14.3388C3.61962 14.4997 3.49743 14.6896 3.41542 14.8977C3.33342 15.1057 3.2932 15.328 3.29707 15.5516C3.30094 15.7752 3.34882 15.9959 3.43797 16.201C3.52713 16.4062 3.65582 16.5917 3.81668 16.7471L10.2167 23.1471C10.3716 23.3033 10.556 23.4273 10.7591 23.5119C10.9622 23.5966 11.18 23.6401 11.4 23.6401C11.62 23.6401 11.8379 23.5966 12.041 23.5119C12.2441 23.4273 12.4284 23.3033 12.5834 23.1471L26.1833 9.54712C26.3525 9.39105 26.4875 9.20163 26.5799 8.9908C26.6722 8.77997 26.7199 8.55229 26.7199 8.32212C26.7199 8.09195 26.6722 7.86428 26.5799 7.65345C26.4875 7.44261 26.3525 7.25319 26.1833 7.09712V7.09712Z" fill="white"/>
                        </svg>

                            <img src="/statics/img/icons/check/check.svg" alt="">
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
                        <p class="mb-10" ><a href="about.html" class=" link link-tiny text-gray">производство</a></p>
                        <p class="mb-10" ><a href="about.html" class=" link link-tiny text-gray">карьера</a></p>
                        <p class="mb-10" ><a href="delivery.html" class=" link link-tiny text-gray">адреса магазинов</a></p>
                    </div>
                    <div>
                        <h4 class="title-3">Доставка</h4>
                        <p class="mb-10" ><a href="delivery.html" class=" link link-tiny text-gray">способы получения</a></p>
                        <p class="mb-10" ><a href="gift-card.html" class=" link link-tiny text-gray">подарочные сертификаты</a></p>
                        <p class="mb-10" ><a href="gift-card.html" class=" link link-tiny text-gray">клубная карта</a></p>
                        <p class="mb-10" ><a href="404.html" class=" link link-tiny text-gray">оплата</a></p>
                    </div>
                </div>
                <div>
                    <h5 class="title-3" id="contact">Возникли вопросы? Ответим!</h5>
                    <div class="flex space-between ">
                        <a class="footer-img-link flex align-center link link-tiny mr-20">
                            <img  src="statics/img/icons/instagram.svg"
                                 alt="">
                            <p>alatyr.ru</p>
                        </a>
                        <a href="mailto:support@alatyr.com"
                           class="footer-img-link flex align-center link link-tiny mr-20">
                            <img  src="statics/img/icons/envelope.svg"
                                 alt="">
                            <p>support@alatyr.com</p>
                        </a>
                        <a href="tel:+7 800 789 13 13"
                           class="footer-img-link flex align-center link link-tiny mr-20">
                            <img src="statics/img/icons/phone.svg"
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
