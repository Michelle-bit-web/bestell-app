function renderContent(){
    for (let i = 0; i < dishes.length; i++) {
        if(dishes[i].dish == "main"){
            document.getElementById('main_dishes').innerHTML += templateDishes(i);
        } else if(dishes[i].dish == "side"){
            document.getElementById('side_dishes').innerHTML += templateDishes(i);
        } else if(dishes[i].dish == "drink"){
            document.getElementById('drinks').innerHTML += templateDishes(i);
        }
    }
}

function addToBasket(i){
    document.getElementById('div_basket_content').innerHTML += templateBasket(i);
    document.getElementById('div_basket_content').innerHTML += templateTotalPrice();

}

function deleteBasket(){
    document.getElementById(`div_basket_content`).innerHTML = "";
}

function changeAmount(a, i){
    if(a > 0){
        document.getElementById(`amount${i}`).innerHTML = `${+1}`;
    } else if(a < 0){
        document.getElementById(`amount${i}`).innerHTML = `${-1}`;
    }

}

function deliveryOrPickup(a, event){
    event.target.classList.toggle('choosed_btn');
    event.target.classList.toggle('not_choosed_btn');
}