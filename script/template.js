function triggerNavbar() {
  document.getElementById("navbar").classList.toggle("d_none");
}

function templateDishes(i) {
  return /*html*/ `
        <div class="single_dish_content">
            <div id="dish_img${i}" class="dish_img"> 
            </div>
            <div class="div_single_dish">
                <h3>${dishes[i].name}</h3>
                <button id="add_to_basket" class="add_to_basket hover" onclick="addToBasket(${i})">+</button>
            </div>
            <p>${dishes[i].content}</p>
            <p>${dishes[i].price} €</p>
        </div>
    `;
}

function templateBasket(i) {
  return /*html*/ `
    <div>
        <div id="dish${i}" class="div_basket_content">
            <div class="added_dish_title">
                <div id="amount${i}">1</div>
                <div>x</div>
                <h4>${dishes[i].name}</h4><br>
            </div>
            
           <div class="div_change_amount">
             <div class="div_plus_minus">
                  <button id="plus_amount" class="change_amount_btn hover" onclick="addToBasket(${i})">+</button>
                  <button id="minus_amount" class="change_amount_btn hover" onclick="removeFromBasket(${i})">-</button>
             </div>
             <p id="calc_price_single_dish${i}">${dishes[i].price} €</p>
           </div>
            
        </div>
        
    </div>
`;
}

function templateTotalPrice() {
  return /*html*/ `
    <div class="div_total_price">
        <div class="div_current_sum">
            <p>Zwischensumme</p>
            <p>€</p>
        </div>
        <div id="delivery_costs" class="div_delivery_costs">
            <p>zzgl. Lieferkosten</p>
            <p id="delivery_cost">5 €</p>
        </div>
        <div class="div_total_sum">
            <b><p>Gesamt</p></b>
            <p>€</p>
        </div>
        <div class="div_order_btn">
        <a class="link_in_order_btn" href="#top-logo">
         <button id="order_btn" class="order_btn hover" onclick="order()">Bestellen</button>
        </a>
        </div>
       
    </div>
`;
}
