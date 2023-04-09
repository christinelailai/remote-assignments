function max(numbers) {
    let compare = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > compare) {
          compare =  numbers[i];
        }
    }
    return compare;
}


console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));


function findPosition(numbers, target) {
// your code here, for-loop method preferred
}


function findPosition(numbers, target) {
    let i = 0;
    while (i < numbers.length){
        if ( numbers[i] === target){
            break;
        }
        i++
    }
    if(i === numbers.length) {
        i = -1;
    }
    return i;
}
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1
