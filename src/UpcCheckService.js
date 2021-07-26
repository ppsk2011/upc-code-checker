export const checkUpc = (upcCode) => {
    let lastNumber = Number(upcCode.substring(upcCode.length - 1));
    if (isNaN(lastNumber)) { return false; }

    let arr = upcCode.substring(0, upcCode.length - 1).split("").map(x => +x);
    console.log(arr)
    let oddSum = arr.reduce((acc, curr, index) => acc + (index % 2 === 0 ? curr : 0), 0);
    let multipliedSum = oddSum * 3;
    let evenSum = arr.reduce((acc, curr, index) => acc + (index % 2 === 1 ? curr : 0), 0);
    let addedSum = multipliedSum + evenSum;
    let checkDigit = addedSum % 10 === 0 ? 0 : 10 - addedSum % 10
    let result = checkDigit === lastNumber ? 'Valid' : 'Invalid';
    let resultArr=[{oddSum,multipliedSum,evenSum,addedSum,checkDigit, result}];
    console.log(resultArr)
    return resultArr;
}
