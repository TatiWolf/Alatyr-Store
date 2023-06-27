function getFile(fileName) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', fileName, true);

        request.onload = function () {
            if (request.status === 200) {
                try {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject(new Error('Request failed. Status: ' + request.status));
            }
        };

        request.onerror = function () {
            reject(new Error('Request failed'));
        };
        request.send();
    });
}

function transitionToProduct(productString) {
    let product = JSON.parse(decodeURIComponent(productString));
    localStorage.setItem('name', product.name);
    localStorage.setItem('description', product.description);
    localStorage.setItem('composition', product.composition);
    localStorage.setItem('img', product.img);
    localStorage.setItem('price', product.price);
    localStorage.setItem('volume', product.volume);
    localStorage.setItem('type', product.type);

    location.assign('../product/product.html');
}

let counts = [];

getFile('../../../statics/data/products.json')
    .then((data) => {
        let type = localStorage.getItem('type');
        let productsList = data.products;
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
        <img src="../../../${product.img}" class="product-list-img " alt="">
        </div>
        </a>
        <p class="paragraph mb-20">${product.name}</p>
      `;
            productElement.append(button);
            productListContainer.appendChild(productElement);
            counts.push(1);
        });
    })
    .catch((error) => {
        console.error(error);
        // Обработка ошибок
    });
