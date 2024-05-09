"use strict"

let myScores = [92,98,84,76, 89,99,100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

// function getAverage(scores){
//     let total = 0;
//     for(let i =0; i<myScores.length;i++){
//         total += myScores[i]; 
//     }
    
//     return total / myScores.length;
// }
// console.log(getAverage(myScores));

// function average(scores){
//      let total = 0;
//      for(let i =0; i<yourScores.length;i++){
//         total += yourScores[i]; 
//      }
//     return total / yourScores.length;
   
// }
//  console.log(average(yourScores));

function getAverage(scores){
    let total = 0;
    for(let i =0; i<scores.length;i++){
        total += scores[i]; 
    }
    
    return total / scores.length;
}
console.log(getAverage(myScores));
console.log(getAverage(yourScores));


