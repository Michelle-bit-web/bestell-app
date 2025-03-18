function templateContent(i){
    return /*html*/`
        <div>
            <p>${dishes[i].image}</p>
            <div class="div_single_dish">
                <h3>${dishes[i].name}</h3>
                <button id="add_to_basket" class="add_to_basket" onclick="addToBasket(i)">+</button>
            </div>
            <p>${dishes[i].content}</p>
            <p>${dishes[i].price} €</p>
        </div>
    `
}