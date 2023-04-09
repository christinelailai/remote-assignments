function count(input) {
    let inputOperation = input;
    const result = {};
    for (let i = 0; inputOperation.length > 0;) {
        const letterFirst = inputOperation[0];
        const length = inputOperation.length;
        inputOperation = inputOperation.filter(letter => letter !== inputOperation[0]);
        const lengthDiff = length - inputOperation.length;
        result[letterFirst]=lengthDiff;
       }
    return result;
}



let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));


function groupByKey(input) {
    let inputOperation = input;
    const result = {};
    for (let i = 0; inputOperation.length > 0;) {
        const sumValue = inputOperation
            .filter(letter =>letter.key === inputOperation[0].key)
            .reduce((acc,letter) => acc += letter.value,0);
        result[inputOperation[0].key] =sumValue
        inputOperation = inputOperation.filter(letter => letter.key !== inputOperation[0].key);
    }
    return result;
}

let input2 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKey(input2));



function countNew(input) {
    return input.reduce((count, letter) => {
        if(!count[letter]) {
            count[letter] = 1;
        } else {
           count[letter] += 1;
        }
        return count
   },{})
}

let input3 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(countNew(input3));


function groupByKeyNew(input) {
    return input.reduce((acc, letter) => {
        if(!acc[letter.key]) {
            acc[letter.key] = letter.value

        } else {
            acc[letter.key] = acc[letter.key] +letter.value;

        }
        return acc
    },{})





}

let input4 = [
    { key: "a", value: 3 },
    { key: "b", value: 1 },
    { key: "c", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 5 },
];
console.log(groupByKeyNew(input4));

