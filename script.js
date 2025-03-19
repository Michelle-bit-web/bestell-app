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

function checkBasketStatus(){
    if(document.getElementById('basket_content').innerHTML !== ""){
        document.getElementById('basket_content_placeholder').classList.add('d_none');
    }
}

function addToBasket(i){
    checkBasketContent(i);
    checkStatusDelivery();
    checkBasketStatus();
}

function checkBasketContent(i){
    if()
    document.getElementById('basket_content').innerHTML += templateBasket(i);
    if(document.getElementById('div_basket_price_content').innerHTML !== ""){
        document.getElementById('div_basket_price_content').innerHTML = ""
    };
    document.getElementById('div_basket_price_content').innerHTML += templateTotalPrice();
}

function checkStatusDelivery(){
    if(deliveryStatus == false){
        document.getElementById('delivery_costs').classList.add('d_none');
    } else{
        document.getElementById('delivery_costs').classList.remove('d_none');
    }
}

function deleteBasket(){
    document.getElementById(`basket_content`).innerHTML = "";
    document.getElementById('div_basket_price_content').innerHTML = "";
}

function changeAmount(a, i){
    if(a > 0){
        document.getElementById(`amount${i}`).innerHTML = `${+1}`;
    } else if(a < 0){
        document.getElementById(`amount${i}`).innerHTML = `${-1}`;
    }

}

function deliveryOrPickup(a){
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

function closeAlert(){
    document.getElementById('ordered_alert').classList.add('d_none');
}
