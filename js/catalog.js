let counts = [];

function transitionToProduct(productString) {
    let product = JSON.parse(decodeURIComponent(productString));
    localStorage.setItem('name', product.name);
    localStorage.setItem('description', product.description);
    localStorage.setItem('composition', product.composition);
    localStorage.setItem('img', product.img);
    localStorage.setItem('price', product.price);
    localStorage.setItem('volume', product.volume);
    localStorage.setItem('type', product.type);

    location.assign('product.html');
}

function showProduct () {
    {
        let type = localStorage.getItem('type');
        let productsList = [
            {
                "name": "СКРАБ ДЛЯ ТЕЛА с водорослями",
                "description": "Солевой скраб прекрасно стимулирует кровообращение в коже, очищает поры, удаляя с поверхности омертвевшие клетки и загрязнения. Комплекс морских минералов насыщает кожу энергией и дарит ей удивительную гладкость. Коктейль из морских водорослей обладает антиоксидантным, увлажняющим и тонизирующим действием. Масло морских водорослей отличается регенерирующим, смягчающим действием.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product1.png",
                "price": "569 ₽",
                "volume": "100 гр.",
                "type": "0"
            },
            {
                "name": "СКРАБ ДЛЯ ТЕЛА виноградный",
                "description": "Побалуйте свою кожу мягкой роскошью этого ароматного бережного скраба. Кристаллы сахара и молотые виноградные косточки любовно очистят вашу кожу от отмерших клеток. Масла ши (карите) и виноградных косточек увлажнят кожу, омолаживая её, масла миндаля, и оливок обеспечат полноценным питанием, а экстракты целебных трав и спелых ягод преобразят кожу, превращая её в гладкий шелк.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product2.png",
                "price": "569 ₽",
                "volume": "100 гр.",
                "type": "0"
            },
            {
                "name": "СКРАБ ДЛЯ ТЕЛА лимонный",
                "description": "Пенящийся скраб для тела создан для глубокого и нежного очищения кожи. Скрабирующие частицы бережно удаляют ороговевшие клетки кожи, способствуя её очищению и обновлению. Экстракт лимона в составе скраба оказывает тонизирующее воздействие и делает кожу более подтянутой и упругой, а наполненный летней свежестью аромат лимона превращает каждый прием душа в сеанс ароматерапии.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product3.png",
                "price": "569 ₽",
                "volume": "100 гр.",
                "type": "0"
            },
            {
                "name": "ГЕЛЬ ДЛЯ ТЕЛА с водорослями и ментолом",
                "description": "Гель способствует мягкому очищению от загрязнений, оставляя на коже ощущение комфорта, мягкости и чистоты. Содержит экстракт водорослей, биологически активные вещества которого оказывают регенерирующее действие, способствуют питанию и увлажнению кожи. Прекрасно подходит для всех типов кожи.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product4.png",
                "price": "799 ₽",
                "volume": "150 мл",
                "type": "0"
            },
            {
                "name": "МОЛОЧКО ДЛЯ ТЕЛА с чайной розой",
                "description": "Прекрасно увлажняет, дарит коже нежность и мягкость. Экстракты розы и шалфея стимулируют регенерацию кожи, насыщают влагой. Масла ши и зародышей пшеницы питают и тонизируют, повышают упругость кожи. Рекомендуем использовать молочко после душа как дополнительный уход.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product5.png",
                "price": "849 ₽",
                "volume": "150 мл",
                "type": "0"
            },
            {
                "name": "КРЕМ ДЛЯ РУК с экстрактом вереска и рапса",
                "description": "Натуральные компоненты улучшают состояние кожи и укрепляют ногтевые пластины. Нежная и упругая, бархатная и гладкая кожа рук будет радовать Вас при использовании этого экологически чистого средства по уходу за собой.<br />/nОн включает в себя натуральные экстракты алтайских трав, оказывающих положительное воздействие на кожу рук, ногти и кутикулу.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product6.png",
                "price": "139 ₽",
                "volume": "50 мл",
                "type": "0"
            },
            {
                "name": "ТКАНЕВАЯ МАСКА ДЛЯ ЛИЦА с алоэ",
                "description": "Маска для лица с экстрактом алоэ интенсивно увлажняет и смягчает кожу, улучшает защитные свойства кожи, повышает ее способность удерживать влагу. Экстракт алоэ оказывает мощное антиоксидантное, восстанавливающее, увлажняющее, тонизирующее действие. Экстракт гамамелиса сужает поры и способствует снижению секреции кожного сала. Экстракт ромашки оказывает смягчающее и успокаивающее действие. Подойдет для всех типов кожи, особенно для обезвоженной.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product7.png",
                "price": "129 ₽",
                "volume": "4 мл",
                "type": "1"
            },
            {
                "name": " ТКАНЕВАЯ МАСКА ДЛЯ ЛИЦА с мятой и клубникой",
                "description": "Экстракт клубники — это кладезь витамина С, который улучшает цвета лица и обеспечивает антиэйдж и антиоксидантный эффекты. Экстракт клубники стимулирует выработку коллагена, улучшает тонус и упругость кожи. Аллантоин успокаивает и смягчает кожу. Пантенол способствует восстановлению поврежденной кожи. Экстракт цветков сакуры, экстракт лотоса выравнивают тон кожи и уменьшают пигментные пятна.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product8.png",
                "price": "129 ₽",
                "volume": "4 мл",
                "type": "1"
            },
            {
                "name": " ТКАНЕВАЯ МАСКА ДЛЯ ЛИЦА медовая",
                "description": "Содержит экстракт меда, который представляет собой комплекс различных ценных микроэлементов, а также сахара, ферменты, органические кислоты, витамины, воски, таким образом, она обеспечивает питание для усталой и проблемной кожи и сохраняет её здоровой и мягкой. Экстракт меда усиливает способность рогового слоя кожи удерживать влагу, снижает шероховатость и сухость кожи, восстанавливает микрорельеф, повышает эластичность и упругость кожи, придает коже бархатистость, улучшает цвет лица, обладает легким отшелушивающим и отбеливающим действием.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product9.png",
                "price": "129 ₽",
                "volume": "4 мл",
                "type": "1"
            },
            {
                "name": "НОЧНОЙ КРЕМ ДЛЯ ЛИЦА с медом и облепихой",
                "description": "Питательный крем, звездой которого является запатентованный комплекс 30,63 % Honey Glow Queen. Медовый комплекс — это микс 7 ингредиентов, пять из которых получены из продуктов пчеловодства, а два других -корица и куркума. Крем обладает мягкой, шелковистой текстурой, моментально впитывается и оставляет приятное ощущение увлажнённости, гладкости и комфорта.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product10.png",
                "price": "1 990 ₽",
                "volume": "30 мл",
                "type": "1"
            },
            {
                "name": "ДНЕВНОЙ КРЕМ ДЛЯ ЛИЦА с малиной и алоэ",
                "description": "Формирует на коже защитный барьер, не позволяющий влаге испариться. Разглаживает структуру кожи, защищает ее от вредного воздействия окружающей среды. Восстанавливает водный баланс и ускоряет процессы обновления клеток. Подходит для всех типов кожи.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product11.png",
                "price": "1 990 ₽",
                "volume": "30 мл",
                "type": "1"
            },
            {
                "name": "ТОНИК ДЛЯ ЛИЦА с экстрактом алоэ",
                "description": "Восстанавливает естественный уровень pH кожи и является проводником активных компонентов средств дальнейшего ухода. Гидролат розы в сочетании с гелем алоэ вера, гиалуроновой кислотой и экстрактом овса обеспечивает интенсивное увлажнение и питание, а протеины пшеницы долгое время препятствуют потере влаги. Обеспечивает коже комфорт, мягкость и эластичность.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product12.png",
                "price": "1 129 ₽",
                "volume": "150 мл",
                "type": "1"
            },
            {
                "name": "ТЕРМАЛЬНАЯ ВОДА",
                "description": "Термальная вода отличается высоким содержанием селена, мощного природного антиоксиданта, который защищает кожу человека от негативного воздействия свободных радикалов. Ее состав представляет уникальное сочетание минеральных солей и олиго-элементов и поддерживает физиологический баланс чувствительной кожи. Нейтрализует свободные радикалы, повреждающие клетки. Оказывает ранозаживляющее, иммуномодулирующее и противовоспалительное действие.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product13.png",
                "price": "690 ₽",
                "volume": "150 мл",
                "type": "1"
            },
            {
                "name": "ПЕНКА ДЛЯ УМЫВАНИЯ",
                "description": "Мягкая гипоаллергенная пенка для умывания. Пенка обладает нежной легкой текстурой, мгновенно вспенивается, а ее мягкая формула успокаивает кожу. Пенка, обогащенная водой с микро частицами водорода, идеально удаляет остатки макияжа, оставляя на коже ощущение чистоты и свежести.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product14.png",
                "price": "1 190 ₽",
                "volume": "100 мл",
                "type": "1"
            },
            {
                "name": "ПЕНКА ДЛЯ СНЯТИЯ МАКИЯЖА",
                "description": "Очищающая пенка бережно очищает кожу лица от повседневных загрязнений и остатков макияжа. Эффективно удаляет ороговевшие клетки кожи, излишки себума, не высушивая ее. Пенка легко смывается, даря коже ощущение комфорта и ровный тон. Благодаря тщательно подобранным компонентам пенка увлажняет, улучшает цвет и освежает кожу. Не раздражает и не сушит кожу. Подходит для ежедневного применения, утром и вечером.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product15.png",
                "price": "980 ₽",
                "volume": "100 мл",
                "type": "1"
            },
            {
                "name": "КРЕМ СОЛНЦЕЗАЩИТНЫЙ 50+ SPF с алоэ",
                "description": "Водостойкий солнцезащитный крем для лица обладает высокой степенью защиты от солнечного воздействия UVA- и UVB-лучей, способствует замедлению старения кожи, предупреждает образование пигментных пятен. Инновационные защитные фильтры надежно защищают кожу от солнечного излучения, не провоцируют раздражения и не разрушаются под воздействием солнца. Легкая текстура крема равномерно распределяется, не оставляет белых разводов и желтых следов.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product16.png",
                "price": "1 450 ₽",
                "volume": "50 мл",
                "type": "1"
            },
            {
                "name": "СЫВОРОТКА ВОКРУГ ГЛАЗ с бурыми водорослями",
                "description": "Сыворотка вокруг глаз подтягивает кожу и разглаживает морщины. Инновационная формула сыворотки замедляет старение кожи вокруг глаз. А также стимулирует выработку естественных омолаживающих белков в коже — коллагена и эластина. Действие сыворотки аналогично действию ботокса, но гораздо безопаснее и имеет накопительный результат. В результате ежедневного применения сыворотки, кожа вокруг глаз становится упругой, напитанной и пропадают все следы усталости.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product17.png",
                "price": "2 980 ₽",
                "volume": "40 мл",
                "type": "1"
            },
            {
                "name": "МАСЛО ДЛЯ ВОЛОС горчичное",
                "description": "Горчичное масло, используемое с древнегреческих времен, полезно во многих областях. Он сбалансирован с точки зрения соотношения жиров омега-3 и омега-6. В нём есть витаминны А, Е, группы В, D, Е, К ускоряют процессы обновления, регенерации, восстанавливают эластичность, упругость покровов, выполняют защитную функцию, улучшают цвет волос , избавляют от сухости, шелушений, обладают омолаживающими свойствами, профилактика борьбы с сединой.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product18.png",
                "price": "1 290 ₽",
                "volume": "30 мл",
                "type": "2"
            },
            {
                "name": "МАСЛО ДЛЯ ВОЛОС репейное",
                "description": "Репейное масло — проверенное средство для волос, его получают, настаивая корни лопуха—репейника на подсолнечном масле.Экстракт содержит «витамины красоты» А, Е, 20 микроэлементов и другие вещества, которые стимулируют обменные процессы в луковицах волос, снимают раздражение кожи, защищают волосы от агрессии внешней среды. Хотите здоровые блестящие волосы? Применяйте репейное масло регулярно.aureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product19.png",
                "price": "1 290 ₽",
                "volume": "30 мл",
                "type": "2"
            },
            {
                "name": "ТЕРМОЗАЩИТА 3 в 1",
                "description": "Под воздействием температур влага, содержащаяся в структуре волос, испаряется, они становятся сухими и безжизненными. Спрей для волос термозащита оберегает волосы от повреждений и пересыхания при всех видах горячей укладки. В состав спрея входит экстракт винограда. Регенерации волос способствует экстракт ламинарии, который также оказывает положительный эффект на кожу головы.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product20.png",
                "price": "890 ₽",
                "volume": "150 мл",
                "type": "2"
            },
            {
                "name": "СЫВОРОТКА ДЛЯ РОСТА ВОЛОС со жгучим перчем",
                "description": "Описание продукта",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product21.png",
                "price": "1 290 ₽",
                "volume": "150 мл",
                "type": "2"
            },
            {
                "name": "СЫВОРОТКА ДЛЯ ЛЕГКОГО РАСЧЕСЫВАНИЯ ВОЛОС с шелком и маслом ши",
                "description": "Разработана для распутывания и максимального облегчения ежедневного расчесывания волос. Средство ухаживает и дарит эффект кондиционирования в течение дня. В состав сыворотки входят экстракты растительных масел: марулы, макадамии, манои, оказывающие глубокое питание, насыщая ценными компонентами. Экстракт шелка с выжимкой масла ши оказывает дополнительный укрепляющий эффект и придает особенный блеск.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product22.png",
                "price": "1 050 ₽",
                "volume": "150 мл",
                "type": "2"
            },
            {
                "name": "КОСМЕТИЧКА",
                "description": "Стильная и компактная косметичка идеально подходит для хранения косметики. Материал косметички легко моется, а также ее всегда можно взять с собой. Размер: 15×12,5×5 см",
                "composition": "60% хлопок, 40% эластан",
                "img": "statics/img/product/product23.png",
                "price": "1 290 ₽",
                "volume": "размер: S",
                "type": "3"
            },
            {
                "name": "ПЛАКАТ #1",
                "description": "Вы ищете уникальность и оригинальность в своем интерьере? У нас есть уникальные плакаты формата А2, которые станут не только ярким акцентом в любом помещении, но и отражением Вашей индивидуальности. Мы используем только качественные материалы, чтобы создать прочные и долговечные плакаты, которые будут радовать Вас на протяжении многих лет.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product24.png",
                "price": "290 ₽",
                "volume": "1 шт",
                "type": "3"
            },
            {
                "name": "ПЛАКАТ #2",
                "description": "Вы ищете уникальность и оригинальность в своем интерьере? У нас есть уникальные плакаты формата А2, которые станут не только ярким акцентом в любом помещении, но и отражением Вашей индивидуальности. Мы используем только качественные материалы, чтобы создать прочные и долговечные плакаты, которые будут радовать Вас на протяжении многих лет.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product29.png",
                "price": "290 ₽",
                "volume": "1 шт",
                "type": "3"
            },
            {
                "name": "ПЛАКАТ #3",
                "description": "Вы ищете уникальность и оригинальность в своем интерьере? У нас есть уникальные плакаты формата А2, которые станут не только ярким акцентом в любом помещении, но и отражением Вашей индивидуальности. Мы используем только качественные материалы, чтобы создать прочные и долговечные плакаты, которые будут радовать Вас на протяжении многих лет.",
                "composition": "Aqua, Flores сentaureae cyanus water, Aloe barbadensis leaf juice, Pentylene glycol, Sorbitol, Algae extract, пептидный комплекс Syn-Hycan, Benzyl alcohol",
                "img": "statics/img/product/product30.png",
                "price": "290 ₽",
                "volume": "1 шт",
                "type": "3"
            },
            {
                "name": "СУМКА-ШОППЕР",
                "description": "Стильный тканевый шоппер, который не только удачно дополнит образ, но и, благодаря своей вместительности, надежно сохранит все покупки во время шоппинга. Размер сумки: 36*41 см",
                "composition": "100% хлопок",
                "img": "statics/img/product/product25.png",
                "price": "490 ₽",
                "volume": "размер: S",
                "type": "3"
            },
            {
                "name": "МАСКА ДЛЯ СНА",
                "description": "Маска для сна и путешествий — это незаменимый аксессуар, позволяющий обеспечить полноценный отдых в любое время. Благодаря ультрамягкому материалу использование маски становится еще более комфортным.Маска позволит сохранить отдохнувший внешний вид даже при длительном путешествии.",
                "composition": "60% хлопок, 40% эластан",
                "img": "statics/img/product/product26.png",
                "price": "340 ₽",
                "volume": "размер: универсальный",
                "type": "3"
            },
            {
                "name": "ХУДИ",
                "description": "Худи выполнен из высококачественного футера с велюр эффектом, благодаря натуральному хлопку в составе ткани модель приятна к телу и комфортна в носке. Отлично подойдет для уютных городских образов, долгих прогулок и перелётов.",
                "composition": "100% хлопок",
                "img": "statics/img/product/product27.png",
                "price": "1 290 ₽",
                "volume": "размер: оверсайс",
                "type": "3"
            },
            {
                "name": "ЗНАЧКИ металлические",
                "description": "Очень красивое и стильное универсальное украшение. Можно носить на лацкане пиджака или пальто, на платье/ блузке, на шапке или сумке. Размер изделия ~3,5×2,9 см. Идет в подарочной упаковке.",
                "composition": "100% металл",
                "img": "statics/img/product/product28.png",
                "price": "890 ₽",
                "volume": "размер: стандартный",
                "type": "3"
            }
        ]
        let index = 0;
        let products = productsList
        if (type) {
            products = productsList.filter((product) => {
                return product.type === type;
            });
        }


        const productListContainer = document.getElementById('product-list');
        products.forEach((product) => {
            product.index = index + 1;
            index = product.index;

            const productElement = document.createElement('div');
            const button = document.createElement('button');
            button.classList.add('animate-button', 'dropdown', 'link', 'w-full', 'title-4');
            button.innerHTML = `${product.price}`;
            button.id = product.index;
            button.onclick = function click() {
                setPopUp()
                button.innerHTML = `
                <div class="flex space-between">
                <div onclick="(() => { 
                    if (counts[${product.index - 1}] === 0) {
                        counts[${product.index - 1}] = 0
                    }else counts[${product.index - 1}]--; })()"><</div>
                <span id="${product.index}">${counts[product.index - 1]}</span>
                <div onclick="(() => { counts[${product.index - 1}]++; })()">></div>
                </div>`;
            }.bind(button); // Bind the function to the button object

            productElement.className = 'product-wrap-element';
            productElement.innerHTML = `
        <a class="flex" onclick="transitionToProduct('${encodeURIComponent(JSON.stringify(product))}')">
        <div class="product-list-img-wrap radius">
        <img src="../${product.img}" class="product-list-img " alt="">
        </div>
        </a>
        <p class="paragraph mb-20">${product.name}</p>
      `;
            productElement.append(button);
            productListContainer.appendChild(productElement);
            counts.push(1);
        });
    }
}

showProduct()
