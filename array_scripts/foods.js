"use strict"
let lunch = [
    {item: "keiki plate",price:6.00},
    {item:"coco Shrimp", price:12.25},
    {item:"Mochi Ice Cream", price:2.00}
]
function takeOutAmount(meals){
    // start a variable to keep track of total
    let totalcost = 0;
    // let numberOfMeals = mealsArray.length

    for(let i = 0; i < meals.length; i++){
        totalcost += meals[i].price;
    }

    return totalcost;
    
}
let lunchTotal = takeOutAmount(lunch);
let lunchTax = lunchTotal * (8/100);
let lunchTip = lunchTotal * (18/100);
let totalDue = lunchTotal +lunchTax +lunchTip;

console.log("the lunch total due is: "+lunchTotal); 
console.log("the tax due is: "+lunchTax); 
console.log("the tip due is: "+lunchTip); 
console.log("the total due is: "+ totalDue.toFixed(2));

                       