"use Strict"
let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

for(let i = 0; i<academyMembers.length; i++){
    if(academyMembers[i].memID === 187){
        console.log(`${academyMembers[i].name} is 187`);
    } 
    if(academyMembers[i].films.length >= 3 ){
        console.log(`${academyMembers[i].name} more than 3 films`)
    }
    if(academyMembers[i].name.indexOf("Bob") === 0 ){
        console.log(`${academyMembers[i].name} Starts with the three first letters of B O B`);
    }
}


// for(let i = 0; i<academyMembers.length; i++){
//    let bobName = academyMembers[i].name
//     if(bobName.indexOf("Bob")!== -1){
//         console.log(`${academyMembers[i].name} starts with bob`)
        
//     }  
// }