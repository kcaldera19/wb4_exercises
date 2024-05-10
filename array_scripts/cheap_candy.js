"use Strict"

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

for(let i =0; i< products.length; i++){
    if(products[i].price < 4){
        console.log(`${products[i].product} cost ${ products[i].price} is less than four`)

    }
}   
    // !== if the you want to find m&M any where in the lists
for(let i =0; i< products.length; i++){
    if(products[i].product.indexOf("M&M") !== -1){
        console.log(`${products[i].product} cost ${ products[i].product} and it is M&M`)
        
    }
}

for(let i =0; i< products.length; i++){
    if(products[i].product.indexOf("Swedish Fish") !== -1){
        console.log(`Yes we carry Swedish Fish`);
        
    }
}

