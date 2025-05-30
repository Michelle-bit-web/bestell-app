let deliveryStatus = true;
let basket = [];
let totalCost = [];
let deliveryCost = [];
let sumPrices = [];

let dishes = [
    {
        "name": "Pizza Sandwich",
        "image": "imgMain0",
        "dish": "main",
        "price": 9.50,
        "content": "Hausgemachter Pizzateig im Steinofen mit Tomaten, Mozzarella und Basilikum.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Grilled Chicken",
        "image": "imgMain1",
        "dish": "main",
        "price": 12.90,
        "content": "Zarte Hähnchenbrust vom Grill. Dazu Semmelklöße und frische Champignons und Dill-Sauce.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Basilikum Spätzle",
        "image": "imgMain2",
        "dish": "main",
        "price": 10.40,
        "content": "Hausgemachte Eierspätzle mit Basilikum und weiteren Kräutern - mit Käse überbacken ",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Hacke-voll",
        "image": "imgMain3",
        "dish": "main",
        "price": 9.50,
        "content": "Große Tortilla-Tasche mit Hackfleisch, Zwiebeln, Paprika, und Guacamole gefüllt.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Potato Fries",
        "image": "imgSide0",
        "dish": "side",
        "price": 4.50,
        "content": "Hausgemachter knusprige Kartoffelstücken.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Sweet Potato Fries",
        "image": "imgSide1",
        "dish": "side",
        "price": 4.50,
        "content": "Hausgemachter knusprige Süßkartoffelstücken.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Gartensalat",
        "image": "imgSide2",
        "dish": "side",
        "price": 9.50,
        "content": "Klassischer Romansalat mit Tomaten, Paprika, roten Zwiebeln und einem Balsamico-Dressing.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Basilikum-Zitronen-Limonade",
        "image": "imgDrink0",
        "dish": "drink",
        "price": 1.20,
        "content": "Limonade von Soda Libre.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Himbeer-Minze-Limonade",
        "image": "imgDrink1",
        "dish": "drink",
        "price": 1.20,
        "content": "Limonade von Soda Libre.",
        "delivery": true,
        "amount": 1,
    },
    {
        "name": "Cola",
        "image": "imgDrink2",
        "dish": "drink",
        "price": 1.20,
        "content": "Cola von Soda Libre.",
        "delivery": true,
        "amount": 1,
    }
]