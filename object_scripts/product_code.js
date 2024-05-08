"use strict"

let shoe = {
    supplerCode: "yuh",
    productNumber:"2345",
    size:"Large"
};

let partCode1 ="yuh:2345-Medium";


function parsePartCode(code){
   
    console.log(`
    ${code.supplerCode}:${code.productNumber}-${code.size}`);
    
    console.log(`
    ${code.supplerCode},
    ${code.productNumber},
    ${code.size}`);
    
}
parsePartCode(shoe);

