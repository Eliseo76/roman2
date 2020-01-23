
function convertToRoman(num) {
    let parsingNumber = num;
    let romanNumeralConversion = [];

    while (parsingNumber > 0) {


        if (parsingNumber >= 1000) {
            parsingNumber -= 1000;
            romanNumeralConversion.push("M")
        } else if (parsingNumber >= 900) {
            parsingNumber -= 900;
            romanNumeralConversion.push("CM")
        } else if (parsingNumber >= 500) {
            parsingNumber -= 500;
            romanNumeralConversion.push("D")
        } else if (parsingNumber >= 400) {
            parsingNumber -= 400;
            romanNumeralConversion.push("CD")
        } else if (parsingNumber >= 100) {
            parsingNumber -= 100;
            romanNumeralConversion.push("C")
        } else if (parsingNumber >= 90) {
            parsingNumber -= 90;
            romanNumeralConversion.push("XC")
        } else if (parsingNumber >= 50) {
            parsingNumber -= 50;
            romanNumeralConversion.push("L")
        } else if (parsingNumber >= 40) {
            parsingNumber -= 40;
            romanNumeralConversion.push("XL")
        } else if (parsingNumber >= 10) {
            parsingNumber -= 10;
            romanNumeralConversion.push("X")
        } else if (parsingNumber >= 9) {
            parsingNumber -= 9;
            romanNumeralConversion.push("IX")
        } else if (parsingNumber >= 5) {
            parsingNumber -= 5;
            romanNumeralConversion.push("V")
        } else if (parsingNumber >= 4) {
            parsingNumber -= 4;
            romanNumeralConversion.push("IV")
        } else if (parsingNumber >= 1) {
            parsingNumber -= 1;
            romanNumeralConversion.push("I")
        }
    }





    return romanNumeralConversion.join("");
}

console.log(convertToRoman(36));