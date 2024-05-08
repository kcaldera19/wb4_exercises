"use strict"



let partCode1 ="yuh:2345-Medium";


function parsePartCode(code){
   
    let suppliercode = code.substring(0, code.indexOf(":"));
    let productNumber = code.substring(code.indexOf(":")+1, code.indexOf("-"));
    let size = code.substring(code.indexOf("-")+1);

    return{
        suppliercode:suppliercode,
        productNumber: productNumber,
        size: size
    };

   
}
let partCode = parsePartCode(partCode1);
console.log(`
supplercode:${partCode.suppliercode},
productNumber:${partCode.productNumber},
size:${partCode.size}`);

