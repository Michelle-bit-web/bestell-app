function getFromLocalStorage() {
    let getDishes = JSON.parse(localStorage.getItem("dishes"));
    if(getDishes !== null){
        dishes = getDishes;
    }
    let getDeliveryStatus = JSON.parse(localStorage.getItem("deliveryStatus"));
    if(getDeliveryStatus !== null){
        deliveryStatus = getDeliveryStatus;
    }
    let getTotalCost = JSON.parse(localStorage.getItem("totalCost"));
    if(getTotalCost !== null){
        totalCost = getTotalCost;
    }
    let getDeliveryCost = JSON.parse(localStorage.getItem("deliveryCost"));
    if(getDeliveryCost !== null){
        deliveryCost = getDeliveryCost;
    }
    let getBasket = JSON.parse(localStorage.getItem("basket"));
    if(getBasket !== null){
        dishes = getBasket;
    }
    let getSumPrices = JSON.parse(localStorage.getItem("sumPrices"));
    if(getSumPrices !== null){
        sumPrices = getSumPrices;
    }
}


// function getFromLocalStorage() {
//     forGetStorage("dishes");
//     forGetStorage("deliveryStatus");
//     forGetStorage("totalCost");
//     forGetStorage("deliveryCost");
//     forGetStorage("basket");
//     forGetStorage("sumPrices");
//   }
  
//   function forGetStorage(x){
//     let y = JSON.parse(localStorage.getItem(x));
//     if(y !== null){
//     x = y;
//     }
//     else{renderContent()}
//   }

  function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
    localStorage.setItem("deliveryStatus", JSON.stringify(deliveryStatus));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));
    localStorage.setItem("deliveryCost", JSON.stringify(deliveryCost));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("sumPrices", JSON.stringify(sumPrices));
  }