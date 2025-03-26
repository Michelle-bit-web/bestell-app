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
            <p class="content_text">${dishes[i].content}</p>
            <p class="content_text">${dishes[i].price} €</p>
        </div>
    `;
}

function templateBasket(b) {
  return /*html*/ `
    <div>
        <div id="dish${b}" class="div_basket_content">
            <div class="added_dish_title">
                <div class="align_amounts">
                  <div id="amount${b}">${basket[b].amount}</div>
                  <div>x</div>
                </div>
                <h4 class="dish_title_basket">${basket[b].name}</h4><br>
            </div>
           <div class="div_change_amount">
             <div class="div_plus_minus">
                  <button id="plus_amount" class="change_amount_btn hover" onclick="changeAmount(1, ${b})">+</button>
                  <button id="minus_amount" class="change_amount_btn hover" onclick="changeAmount(-1, ${b})">-</button>
             </div>
             <p id="calc_price_single_dish${b}" class="price_single_dish">${basket[b].price} €</p>
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
            <div class="div_basket_prices">
             <p id="subtotal" class="subtotal"></p>
             <span>€</span>
            </div>
        </div>
        <div id="delivery_costs" class="div_delivery_costs">
            <p>zzgl. Lieferkosten</p>
            <p id="delivery_cost">5 €</p>
        </div>
        <div class="div_total_sum">
             <b><p>Gesamt</p></b>
            <div class="div_basket_prices">
             <p id="sum" class="sum"></p>
             <span>€</span>
            </div>
        </div>
        <div class="div_order_btn">
        <a class="link_in_order_btn" href="#top-logo">
         <button id="order_btn" class="order_btn hover" onclick="order()">Bestellen</button>
        </a>
        </div>
    </div>
`;
}

function templateBasketMobile(b) {
  return /*html*/ `
    <div>
        <div id="dish${b}" class="div_basket_content">
            <div class="added_dish_title">
                <div class="align_amounts">
                  <div id="amount${b}">${basket[b].amount}</div>
                  <div>x</div>
                </div>
                <h4 class="dish_title_basket">${basket[b].name}</h4><br>
            </div>
           <div class="div_change_amount">
             <div class="div_plus_minus">
                  <button id="plus_amount" class="change_amount_btn hover" onclick="changeAmount(1, ${b})">+</button>
                  <button id="minus_amount" class="change_amount_btn hover" onclick="changeAmount(-1, ${b})">-</button>
             </div>
             <p id="calc_price_single_dish_mobile${b}" class="price_single_dish">${basket[b].price} €</p>
           </div>
        </div>
    </div>
`;
}

function templateTotalPriceMobile() {
  return /*html*/ `
    <div class="div_total_price">
        <div class="div_current_sum">
            <p>Zwischensumme</p>
            <div class="div_basket_prices">
             <p id="subtotal_mobile" class="subtotal"></p>
             <span>€</span>
            </div>
        </div>
        <div id="delivery_costs_mobile" class="div_delivery_costs">
            <p>zzgl. Lieferkosten</p>
            <p id="delivery_cost">5 €</p>
        </div>
        <div class="div_total_sum">
             <b><p>Gesamt</p></b>
            <div class="div_basket_prices">
             <p id="sum_mobile" class="sum"></p>
             <span>€</span>
            </div>
        </div>
        <div class="div_order_btn">
        <a class="link_in_order_btn" href="#top-logo">
         <button id="order_btn" class="order_btn hover" onclick="order()">Bestellen</button>
        </a>
        </div>
    </div>
`;
}