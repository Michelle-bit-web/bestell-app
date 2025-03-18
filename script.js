function renderContent(){
    for (let i = 0; i < dishes.length; i++) {
        document.getElementById('div_content').innerHTML += templateContent(i);
        
    }
}

function addToBasket(i){
    document.getElementById('div_basket').innerHTML += templateBasket(i);
}