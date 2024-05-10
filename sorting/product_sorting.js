"use strict"


let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Fish Worms", price: 5.79 },
    { product: "Choco", price: 2.89 },
    { product: "Peanut lime", price: 2.89 },
    { product: "Swedish candy", price: 3.79 },
    { product: "Sour Worms", price: 5.79 },
    { product: "Leamon Bar", price: 2.89 },

];
// sorting form product name from A-Z
function compareProduct(a, b) {
    if (a.product < b.product) {
        return -1;
    } else if (b.product > a.product) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
products.sort(compareProduct);
console.log(products);

console.log("------------------------------------------")

// Sorting price from lowest to highest
function comparePrice(a, b) {
    return a.price - b.price
}
products.sort(comparePrice)
console.log(products)
