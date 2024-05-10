"use Strict"


// list of object in an array
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

// finds the Academy member whose Id is 187
//  length is just the length of the list
for(let i = 0; i<academyMembers.length; i++){
    if(academyMembers[i].memID === 187){
        console.log(`${academyMembers[i].name} is 187`);
    } 
    // finding who has been in at least 3 films
    if(academyMembers[i].films.length >= 3 ){
        console.log(`${academyMembers[i].name} more than 3 films`)
    }
    // name starts with bob
    //  checking the name properity indexOf and 0 is the satrting postion if you want to find at the beginning 
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