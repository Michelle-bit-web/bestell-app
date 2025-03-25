function renderContent() {
  for (let i = 0; i < dishes.length; i++) {
    document.getElementById(`${dishes[i].dish}_dishes`).innerHTML += templateDishes(i);
    getDishImage(i);
  }
}

function getDishImage(i) {
  document.getElementById(`dish_img${i}`).style.backgroundImage = `url(./assets/img/${dishes[i].image}.png)`;
}

function addToBasket(i) {
  document.getElementById("basket_content").innerHTML = "";
  checkForDuplicate(i);
  renderBasket();
  checkStatusDelivery();
  document.getElementById("basket_content_placeholder").classList.add("d_none");
}

function checkForDuplicate(i) {
  let search = basket.find((item) => item.name == dishes[i].name);
  if (search == undefined) {
    basket.push(dishes[i]);
  } else {
    search.amount += 1;
  }
}

function renderBasket() {
  document.getElementById("basket_content").innerHTML = "";
  document.getElementById("div_basket_price_content").innerHTML = "";
  for (let b = 0; b < basket.length; b++) {
    getTemplatBaskets(b);
  }
  getTemplateTotalPrices();
}

function getTemplatBaskets(b) {
  document.getElementById("basket_content").innerHTML += templateBasket(b);
  document.getElementById("div_basket_overlay").innerHTML += templateBasket(b);
}

function getTemplateTotalPrices() {
  document.getElementById("div_basket_price_content").innerHTML += templateTotalPrice();
  document.getElementById("div_basket_overlay").innerHTML += templateTotalPrice();
}

function checkStatusDelivery() {
    deliveryCost = [];
  if (deliveryStatus == false) {
    document.getElementById("delivery_costs").classList.add("d_none");
    deliveryCost.push(0);
  } else {
    document.getElementById("delivery_costs").classList.remove("d_none");
    deliveryCost.push(5);
  }
  calculatePrices();
}

function changeAmount(a, basketIndex) {
  if (a > 0) {
    basket[basketIndex].amount += 1;
  } else if (a < 0 && basket[basketIndex].amount > 1) {
    basket[basketIndex].amount -= 1;
  } else {
    basket.splice(basket[basketIndex], 1);
  }
  renderBasket();
  checkStatusDelivery();
}

function calculatePrices(){
    sumPrices = [];
    totalCost = [];
    getSumSingleDishes();
    getSubtotalCosts();
    getTotalCosts();
}

function getSumSingleDishes(){
  for (let i = 0; i < basket.length; i++) {
    sumPrices.push({
        "price": (basket[i].price * basket[i].amount),
        "amount": basket[i].amount,
    });
    totalCost.push(sumPrices[i].price);
    document.getElementById(`calc_price_single_dish${i}`).innerHTML = `${sumPrices[i].price} €`
}
}

function getSubtotalCosts(){
  // calculateSum();
  let sum = 0;
   for (const el of totalCost){
   sum += el;
   }
  document.getElementById("subtotal").innerHTML = `${(sum)}`;
}

function getTotalCosts(){
  totalCost.push(deliveryCost[0]);
  // calculateSum();
  let sum = 0;
   for (const el of totalCost){
   sum += el;
   }
  document.getElementById("sum").innerHTML = `${(sum)}`;
}

// function calculateSum(){
//   let sum = 0;
//    for (const el of totalCost){
//    sum += el;
//    }
// }

function deleteBasket() {
  clearInnerHtml();
  clearArrays();
  document.getElementById("basket_content_placeholder").classList.remove("d_none");
}

function clearInnerHtml() {
  document.getElementById(`basket_content`).innerHTML = "";
  document.getElementById("div_basket_price_content").innerHTML = "";
  document.getElementById("div_basket_overlay").innerHTML = "";
}

function clearArrays() {
  basket = [];
  totalCost = [];
  deliveryCost = [];
  savedPrice = [];
}

function deliveryOrPickup(a) {
  document.getElementById("sum").innerHTML = "";
  if (a < 0) {
    pickupStyle();
    deliveryStatus = false;
  } 
  else if (a > 0) {
    deliveryStyle();
    deliveryStatus = true;
  }
  checkStatusDelivery();
}

function pickupStyle() {
  document.getElementById("delivery_btn").classList.add("not_choosed_btn");
  document.getElementById("pickup_btn").classList.add("choosed_btn");
  document.getElementById("pickup_btn").classList.remove("not_choosed_btn");
}

function deliveryStyle() {
  document.getElementById("pickup_btn").classList.add("not_choosed_btn");
  document.getElementById("delivery_btn").classList.add("choosed_btn");
  document.getElementById("delivery_btn").classList.remove("not_choosed_btn");
}

function order() {
  document.getElementById("ordered_alert").classList.remove("d_none");
  document.getElementById("basket_content").innerHTML = "";
  document.getElementById("div_basket_price_content").innerHTML = "";
}

function closeWindow(a, event) {
  if (a == "basket") {
    document.getElementById("div_basket_overlay").classList.add("d_none");
  } else if (a == "alert") {
    document.getElementById("ordered_alert").classList.add("d_none");
  }
  event.stopPropagation();
}

function openOverlay(event) {
  document.getElementById("div_basket_overlay").classList.toggle("d_none");
  event.stopPropagation();
}
