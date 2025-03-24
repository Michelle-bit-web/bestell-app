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
    checkForDuplicate(i);
    renderBasket();
    checkStatusDelivery();
    document.getElementById('basket_content_placeholder').classList.add('d_none');
}

function checkForDuplicate(i){
    if(!basket.find(item => item.name == dishes[i].name)){
        basket.push(dishes[i]);
        savedPrice.push(dishes[i].price);
    }else{
        let basketIndex = basket.findIndex(item => item.name == dishes[i].name);
        basket[basketIndex].amount = basket[basketIndex].amount +1;
        basket[basketIndex].price = savedPrice[0] * basket[basketIndex].amount; 
        console.log(basket[basketIndex].amount, basket[basketIndex].price)
    }
} 

function renderBasket(){
    document.getElementById('basket_content').innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
    for (let b = 0; b < basket.length; b++) {
        if(basket[basket[b]] == true){changeAmount(1, b)}{
            document.getElementById('basket_content').innerHTML += templateBasket(b);
            document.getElementById('div_basket_overlay').innerHTML += templateBasket(b);
        }
    };
    document.getElementById('div_basket_price_content').innerHTML += templateTotalPrice();
    document.getElementById('div_basket_overlay').innerHTML += templateTotalPrice();
}

function checkStatusDelivery(){
    if(deliveryStatus == false){
        document.getElementById('delivery_costs').classList.add('d_none');
        deliveryCost.push(0);
       calcPrices();
    } else{
        document.getElementById('delivery_costs').classList.remove('d_none');
        deliveryCost.push(5);
        calcPrices();
    }
}
function changeAmount(a, i){
    if( a > 0){
        increment();
    }else if(a < 0){
        decrement();
    }
    renderBasket();
    checkStatusDelivery();
}

function increment(){

}

function decrement(){
    let basketIndex = basket.findIndex(item => item.name == dishes[i].name);
    if(basket[i].amount == 1){
        basket.splice(basketIndex, 1);
        console.log(basket[basketIndex].amount, basket[basketIndex].price)
    }else{
        basket[basketIndex].amount = basket[basketIndex].amount -1;
        basket[basketIndex].price = savedPrice[0] * basket[basketIndex].amount;
        console.log(basket[basketIndex].amount, basket[basketIndex].price)
    }
}

function calcPrices(){
    
    for (let i = 0; i < basket.length; i++) {
        document.getElementById('subtotal').innerHTML = `${savedPrice[i]}`;
        document.getElementById('sum').innerHTML = `${(savedPrice[i] + deliveryCost)}`;
    }
}

function deleteBasket(){
    document.getElementById(`basket_content`).innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
    document.getElementById('basket_content_placeholder').classList.remove('d_none');
    document.getElementById('div_basket_overlay').innerHTML = "";
    basket = [];
    totalCost = [];
    deliveryCost = [];
    savedPrice = [];
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