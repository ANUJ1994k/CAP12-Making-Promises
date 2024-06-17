let numbers =[1,2,3,4,5,6,7];

// defining filterArray function
function filterArray(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
// defining a Callback function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number){
    return number%2!==0;
}

// Use the filterArray function to filter even numbers
const evenNumbers = filterArray(numbers, isEven);
const oddNumbers=filterArray(numbers,isOdd);
console.log("Origianl Array:", numbers);
console.log("filtered Even Array:",evenNumbers);
console.log("Filtered Odd numbers Array:",oddNumbers);
