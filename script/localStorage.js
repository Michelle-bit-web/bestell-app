function getFromLocalStorage() {
    forGetStorage("dishes", dishes);
    forGetStorage("deliveryStatus", deliveryStatus);
    forGetStorage("totalCost", totalCost);
    forGetStorage("deliveryCost", deliveryCost);
    forGetStorage("basket", basket);
    forGetStorage("sumPrices", sumPrices);
  }
  
  function forGetStorage(x, array){
    let y = JSON.parse(localStorage.getItem(x));
    if(y !== null){
    Object.assign(array, y);
    }
    else{renderContent()}
  }

  function saveToLocalStorage() {
    localStorage.setItem("dishes", JSON.stringify(dishes));
    localStorage.setItem("deliveryStatus", JSON.stringify(deliveryStatus));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));
    localStorage.setItem("deliveryCost", JSON.stringify(deliveryCost));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("sumPrices", JSON.stringify(sumPrices));
  }