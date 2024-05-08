"use strict"
/*
name
address
city
state
zip
*/

let person = {
    name : "kathy",
    address : "5656 wallows street",
    city : "El Paso",
    state : "TX",
    zip : "12344"
};

function printContact(contact){
    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city},${contact.city} ${contact.zip}`);
}

printContact(person);