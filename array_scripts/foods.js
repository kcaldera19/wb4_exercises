
let lunch = [
    {item: "keiki plate",price:6.00},
    {item:"coco Shrimp", price:12.25},
    {item:"Mochi Ice Cream", price:2.00}
]
function takeOut(items){
    let totalcost = 0;

    for(let i = 0; i < items.length; i++){
        totalcost += items[i].price;
    }
    return totalcost;
    
}
console.log(takeOut(lunch));