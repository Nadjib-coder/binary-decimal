var binBase = 2;
var decBase = 10;

// first function
function getDecimal() {
    let binary = document.getElementById("binary").value;
    let finalDec = Number.parseInt(binary, binBase);

   // Output the decimal number
   document.getElementById("showDecimal").innerHTML = finalDec;
   return finalDec;
}   

// second function 
function getBinary() {
    let decimal = document.getElementById("decimal").value;
    let finalBin = Number.parseInt(decimal, decBase).toString(2);

    // Output the Binary number
    document.getElementById("showBinary").innerHTML = finalBin;
    return finalBin;
}



