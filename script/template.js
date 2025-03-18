function triggerNavbar(){
   document.getElementById('navbar').classList.toggle('d_none');

}

function templateMainDish(i){
    return /*html*/`
        <div>
            <p>${dishes[i].image}</p>
            <div class="div_single_dish">
                <h3>${dishes[i].name}</h3>
                <button id="add_to_basket" class="add_to_basket hover" onclick="addToBasket(${i})">+</button>
            </div>
            <p>${dishes[i].content}</p>
            <p>${dishes[i].price} €</p>
        </div>
    `
}

function templateSideDish(i){
    return /*html*/`
        <div>
            <p>${dishes[i].image}</p>
            <div class="div_single_dish">
                <h3>${dishes[i].name}</h3>
                <button id="add_to_basket" class="add_to_basket hover" onclick="addToBasket(${i})">+</button>
            </div>
            <p>${dishes[i].content}</p>
            <p>${dishes[i].price} €</p>
        </div>
    `
}

function templateDrinks(i){
    return /*html*/`
        <div>
            <p>${dishes[i].image}</p>
            <div class="div_single_dish">
                <h3>${dishes[i].name}</h3>
                <button id="add_to_basket" class="add_to_basket hover" onclick="addToBasket(${i})">+</button>
            </div>
            <p>${dishes[i].content}</p>
            <p>${dishes[i].price} €</p>
        </div>
    `
}

function templateBasket(i){
    return /*html*/`
    <div>
        <div class="div_single_dish">
            <h3>${dishes[i].name}</h3>
            <div class="div_plus_minus">
            <button id="plus_amount" class="change_amount_btn hover" onclick="changeAmount(+1, ${i})">+</button>
            <div id="amount${i}">1x</div>
            <button id="minus_amount" class="change_amount_btn hover" onclick="changeAmount(-1, ${i})">-</button>
            </div>
        </div>
        <p>${dishes[i].price} €</p>
    </div>
`
}

function templateTotalPrice(){
    return /*html*/`
    <div class="div_total_price">
        <div class="div_current_sum">
            <p>Zwischensumme</p>
            <p>€</p>
        </div>
        <div class="div_delivery_costs">
            <p>Lieferkosten</p>
            <p id="delivery_cost">5 €</p>
        </div>
        <div class="div_total_sum">
            <p>Gesamt</p>
            <p>€</p>
        </div>
    </div>
`
}