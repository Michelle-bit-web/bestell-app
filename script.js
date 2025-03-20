function renderContent(){
    for (let i = 0; i < dishes.length; i++) {
        if(dishes[i].dish == "main"){
            document.getElementById('main_dishes').innerHTML += templateDishes(i);
        } else if(dishes[i].dish == "side"){
            document.getElementById('side_dishes').innerHTML += templateDishes(i);
        } else if(dishes[i].dish == "drink"){
            document.getElementById('drinks').innerHTML += templateDishes(i);
        }
        getDishImage(i);
    }
}

function getDishImage(i){
    document.getElementById(`dish_img${i}`).style.backgroundImage = `url(./assets/img/${dishes[i].image}.png)`
}

function addToBasket(i){
    document.getElementById('basket_content').innerHTML = "";
    basket.push(dishes[i]);
    renderBasket();
    checkStatusDelivery(i);
    document.getElementById('basket_content_placeholder').classList.add('d_none');
}

function renderBasket(){
    document.getElementById('basket_content').innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
        document.getElementById('basket_content').innerHTML += templateBasket(i);
        document.getElementById('div_basket_price_content').innerHTML += templateTotalPrice();
    }
}

function checkStatusDelivery(i){
    if(deliveryStatus == false){
        document.getElementById('delivery_costs').classList.add('d_none');
        let deliveryCost = "";
        savePrices(deliveryCost);
    } else{
        document.getElementById('delivery_costs').classList.remove('d_none');
        let deliveryCost = 5;
        savePrices(deliveryCost);
        // basket.push({deliveryCost})
    }
}
//muss ich eher die Basketpreise = dish.preis + dishpreis usw
function changeAmount(a, i){
    let newBasketAmount;
    let newBasketPrice;
    if(a > 0){
        newBasketAmount = basket[i].amount + 1;
        newBasketAmount = basket[i].amount;
        newBasketPrice = basket[i].price * newBasketAmount;
        basket[i].price =  newBasketPrice;
    } else if(a < 0){
        basket[i].amount = basket[i].amount - 1;
        basket[i].price = basket[i].price - basket[i].price;
    };
    renderBasket()
}

function savePrices(deliveryCost){
    let x;
    for (let i = 0; i < basket.length; i++) {
        document.getElementById('subtotal').innerHTML = `${basket[i].price}`;
        document.getElementById('sum').innerHTML = `${(basket[i].price + deliveryCost)}`;
        x = basket[i].price;
        // let subtotal = basket[i].price;
        // let currentSum = (document.getElementById('sum').innerHTML);
        // document.getElementById('sum').innerHTML = "";
        // document.getElementById('sum').innerHTML = `${(currentSum + basket[i])}`
    }
    // let totalPrice = document.getElementById('sum').innerHTML;
    // document.getElementById('sum').innerHTML = "";
    // document.getElementById('sum').innerHTML = `${totalPrice + deliveryCost}`
}

function deleteBasket(){
    document.getElementById(`basket_content`).innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
    document.getElementById('basket_content_placeholder').classList.remove('d_none');
    basket = [];
}

function deliveryOrPickup(a){
    document.getElementById('sum').innerHTML = "";
    if(a < 0){
        document.getElementById('delivery_btn').classList.add('not_choosed_btn');
        document.getElementById('pickup_btn').classList.add('choosed_btn');
        document.getElementById('pickup_btn').classList.remove('not_choosed_btn');
        deliveryStatus = false;
    } else if(a > 0){
        document.getElementById('pickup_btn').classList.add('not_choosed_btn');
        document.getElementById('delivery_btn').classList.add('choosed_btn');
        document.getElementById('delivery_btn').classList.remove('not_choosed_btn');
        deliveryStatus = true;
    };
    checkStatusDelivery();
}

function order(){
    document.getElementById('ordered_alert').classList.remove('d_none');
    document.getElementById('basket_content').innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
}

function closeWindow(a, event){
    if(a == 'basket'){
        document.getElementById('div_basket_overlay').classList.add('d_none');
    }else if(a == 'alert'){
            document.getElementById('ordered_alert').classList.add('d_none');}
    event.stopPropagation();
}

function openOverlay(event){
    document.getElementById('div_basket_overlay').classList.toggle('d_none');
    event.stopPropagation();
}