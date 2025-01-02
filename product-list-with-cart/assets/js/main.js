
window.addEventListener('load', () => {
    const porduct_container = document.querySelector("#porduct_container")
    const cart_container = document.querySelector("#cart_container")
    const modal_cart_container = document.querySelector('#modal_cart_container')

    updateCart()
    updateProducts()
})

var cart_items = [];

var product_items = [
    {
        "id": 1,
        'image': 'image-waffle-desktop.jpg',
        'thumbnail': 'image-waffle-thumbnail.jpg',
        "title": "Waffle with Berries",
        "subtitle": "Waffle",
        "price": 6.50
    },
    {
        "id": 2,
        'image': 'image-creme-brulee-desktop.jpg',
        'thumbnail': 'image-creme-brulee-thumbnail.jpg',
        "title": "Vanilla Bean Crème Brûlée",
        "subtitle": "Crème Brûlée",
        "price": 7.00
    },
    {
        "id": 3,
        'image': 'image-macaron-desktop.jpg',
        'thumbnail': 'image-macaron-thumbnail.jpg',
        "title": "Macaron Mix of Five",
        "subtitle": "Macaron",
        "price": 8.00
    },
    {
        "id": 4,
        'image': 'image-tiramisu-desktop.jpg',
        'thumbnail': 'image-tiramisu-thumbnail.jpg',
        "title": "Classic Tiramisu",
        "subtitle": "Tiramisu",
        "price": 5.50
    },
    {
        "id": 5,
        'image': 'image-baklava-desktop.jpg',
        'thumbnail': 'image-baklava-thumbnail.jpg',
        "title": "Pistachio Baklava",
        "subtitle": "Baklava",
        "price": 4.00
    },
    {
        "id": 6,
        'image': 'image-meringue-desktop.jpg',
        'thumbnail': 'image-meringue-thumbnail.jpg',
        "title": "Lemon Meringue Pie",
        "subtitle": "Pie",
        "price": 5.00
    },
    {
        "id": 7,
        'image': 'image-cake-desktop.jpg',
        'thumbnail': 'image-cake-thumbnail.jpg',
        "title": "Red Velvet Cake",
        "subtitle": "Cake",
        "price": 4.50
    },
    {
        "id": 8,
        'image': 'image-brownie-desktop.jpg',
        'thumbnail': 'image-brownie-thumbnail.jpg',
        "title": "Salted Caramel Brownie",
        "subtitle": "Brownie",
        "price": 4.50
    },
    {
        "id": 9,
        'image': 'image-panna-cotta-desktop.jpg',
        'thumbnail': 'image-panna-cotta-thumbnail.jpg',
        "title": "Vanilla Panna Cotta",
        "subtitle": "Panna Cotta",
        "price": 6.50
    }
]


function add_to_cart(id, name, price) {
    const existingItemIndex = cart_items.findIndex((cart_item) => cart_item.id === id);
    if (existingItemIndex !== -1) {
        cart_items[existingItemIndex].quantity += 1;
    } else {
        item = {
            "id": id,
            "name": name,
            "price": price,
            "quantity": 1
        }
        cart_items.push(item);
    }
    updateCart();
    updateProducts();
}

function remove_from_cart(id) {
    console.log("remove_inside - id:", id);
    const index = cart_items.findIndex((cart_item) => cart_item.id === id);
    if (index !== -1) {
        if (cart_items[index].quantity > 1) {
            cart_items[index].quantity -= 1;
        } else {
            cart_items.splice(index, 1);
        }
        updateCart();
        updateProducts();
    }
}


function updateCart() {
    var totalPrice = 0
    total_cart_items = cart_items.reduce((acc, item) => acc + item.quantity, 0)

    cart_container.innerHTML = `
        <div class="w-full " style="color: var(--Red); font-size: 26px; font-weight: bold; ">Your Cart (${total_cart_items})</div>
    `;
    modal_cart_container.innerHTML = ``

    cart_items.forEach((item) => {
        totalPrice += item.price * item.quantity

        var cart_item = document.createElement("div")
        cart_item.classList.add("cart_item")
        cart_item.innerHTML = `
            <div class="flex justify-between items-center mx-auto py-4"
                style="border-bottom: 0.3px solid var(--Rose-100) ; ">
                <div>
                    <p class="py-1">${item.name}</p>
                    <div class="flex text-sm ">
                        <p class="py-1 mr-4" style="color: var(--Red);">${item.quantity}x</p>
                        <p class="py-1 mr-2 text-gray-400">@ $${item.price}</p>
                        <p class="py-1 text-gray-500">$${item.price * item.quantity}</p>
                    </div>
                </div>
                <div>
                    <p>
                        <button type="button" onclick="remove_from_cart(${JSON.stringify(item.id)})">
                            <div class="rounded-full outline outline-1 outline-gray-300 outline-offset-2 center"
                                style="width: 10px; height: 10px;">
                                <img src="assets/images/icon-remove-item.svg" alt="Icon" />
                            </div>
                        </button>
                    </p>
                </div>
            </div>
        `

        var cart_modal_item = document.createElement("div")
        cart_modal_item.classList.add("cart_modal_item")
        thumbnail = product_items.find(product => product.id === item.id).thumbnail
        cart_modal_item.innerHTML = `
            <div class="flex justify-between items-center mx-auto py-4"
                style="border-bottom: 0.3px solid #cbd5e1; background-color: var(--Rose-100); ">
                <div class="flex" >
                    <div class="mr-2" >
                        <img src="assets/images/${thumbnail}" alt="Thumbnail" style="max-width: 60px;" />
                    </div>
                    <div>
                        <p class="py-1">${item.name}</p>
                        <div class="flex text-sm ">
                            <p class="py-1 mr-2" style="color: var(--Red);">${item.quantity}x</p>
                            <p class="py-1 mr-2 text-gray-400">@ $${item.price}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="py-1" >$${item.price * item.quantity}</p>
                </div>
            </div>
        `

        cart_container.appendChild(cart_item)
        modal_cart_container.appendChild(cart_modal_item)
    })

    cart_container.innerHTML += `
        <div class="flex justify-between items-end mx-auto py-4"
            style="width: 100%;" >
            <span style='color: var(--Rose-500); font-weight: 300; font-size: 90%;' >Order Total</span>
            <span style='font-size: 140%;' ><strong>$${totalPrice}</strong></span>
        </div>
        <div class="flex mx-auto py-2" style="width: 100%;" >
            <div class="w-full flex items-center justify-center p-4 mb-4 text-sm rounded-lg" style="background-color: var(--Rose-100);" role="alert">
                <img src="assets/images/icon-carbon-neutral.svg" class="mr-2" alt="Icon" />
                <span class="sr-only">Info</span>
                <div>
                    This is a <span class="font-medium">carbon-neutral</span> delivery
                </div>
            </div>
        </div>
        <div class="w-full mx-auto flex" >
            <button type="button" id="openModal" class="bg-rose-500 hover:bg-rose-700 text-white font-bold py-4 px-4 rounded-full" style="width: 100%; margin : 0 auto; border: none; cursor: pointer;">Confirm Order</button>
        </div>
    `

    modal_cart_container.innerHTML += `
        <div class="flex justify-between items-end mx-auto py-4" >
            <span style='color: var(--Rose-500); font-weight: 300; font-size: 90%;' >Order Total</span>
            <span style='font-size: 140%;' ><strong>$${totalPrice}</strong></span>
        </div>
    `

    if (cart_items.length == 0) {
        cart_container.innerHTML = `
            <div class="w-full " style="color: var(--Red); font-size: 26px; font-weight: bold; ">Your Cart (${total_cart_items})</div>
            <div class="w-full flex flex-col center" >
                <img src="assets/images/illustration-empty-cart.svg" >
                <p class="text-center" style='color: var(--Rose-500);' >Your added items will appear here</p>
            </div>
        `;
    }

}

function updateProducts() {
    porduct_container.innerHTML = "";
    product_items.forEach((item) => {
        //console.log(item);
        const product_item = document.createElement("div")
        product_item.classList.add("product")

        const existingItemIndex = cart_items.findIndex((cart_item) => cart_item.id === item.id);
        let button;

        if (existingItemIndex !== -1) {
            button = `
                <button type="button"
                    class="add-to-cart-button add-to-cart-button-added text-gray-900 bg-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                    style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); text-align: center; border: 1px solid var(--Red);">
                    <div class="flex justify-between items-center ">
                        <div class="rounded-full outline outline-1 outline-white outline-offset-2 center"
                            style="width: 10px; height: 10px;" 
                            onclick="remove_from_cart(${JSON.stringify(item.id)})" 
                        >
                            <img src="assets/images/icon-decrement-quantity.svg" alt="Icon" >
                        </div>
                        <span>${cart_items[existingItemIndex].quantity}</span>
                        <div class="rounded-full outline outline-1 outline-white outline-offset-2 center"
                            style="width: 10px; height: 10px;"
                            onclick="add_to_cart(${item.id}, '${item.title}', ${item.price})"
                        >
                            <img src="assets/images/icon-increment-quantity.svg" alt="Icon">
                        </div>
                    </div>
                </button>
            `;

            product_item.innerHTML = `
                <div class="max-w-sm border border-gray-200 rounded-lg ">
                    <a href="#">
                        <img class="rounded-t-lg rounded product-image" src="assets/images/${item.image}"
                            style="width: 100%; border: 2px solid var(--Red);" alt="" />
                    </a>
                    <div class="py-5" style="position: relative;">
                        ${button}
                        <p class="font-normal text-gray-700 dark:text-gray-400">${item.subtitle}</p>
                        <a href="#">
                            <h5 class="text-lg font-bold tracking-tight text-gray-900">
                                ${item.title}
                            </h5>
                        </a>
                        <p style="color: var(--Red);"><strong>$${item.price}</strong></p>
                    </div>
                </div>
            `
        } else {
            button = `
                <button type="button"
                    onclick="add_to_cart(${item.id}, '${item.title}', ${item.price}) ; updateCart();"
                    class="add-to-cart-button text-gray-900 bg-white focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                    style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); text-align: center; border: 1px solid var(--Red);">
                    <div class="flex">
                        <img src="assets/images/icon-add-to-cart.svg" alt="Icon" class="mr-2">
                        <span>Add To Cart</span>
                    </div>
                </button>
            `;
            product_item.innerHTML = `
                <div class="max-w-sm border border-gray-200 rounded-lg ">
                    <a href="#">
                        <img class="rounded-t-lg rounded product-image" src="assets/images/${item.image}"
                            style="width: 100%;" alt="" />
                    </a>
                    <div class="py-5" style="position: relative;">
                        ${button}
                        <p class="font-normal text-gray-700 dark:text-gray-400">${item.subtitle}</p>
                        <a href="#">
                            <h5 class="text-lg font-bold tracking-tight text-gray-900">
                                ${item.title}
                            </h5>
                        </a>
                        <p style="color: var(--Red);"><strong>$${item.price}</strong></p>
                    </div>
                </div>
            `
        }

        porduct_container.appendChild(product_item)
    })
}






