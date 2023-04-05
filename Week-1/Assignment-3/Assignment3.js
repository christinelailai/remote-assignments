function countAandB(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'b') {
            count++;
        }
    }
   return count;
}

let input1 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input1));

function toNumber(input) {
    let i = 0;
    while (i < input.length) {
        switch (input[i]) {
            case 'a' :
                input[i] = '1';
                break;
            case 'b' :
                input[i] = '2';
                break;
            case 'c' :
                input[i] = '3';
                break;
            case 'd' :
                input[i] = '4';
                break;
            case 'e' :
                input[i] = '5';
                break;
        }
        i++;
    }
    return input;
}

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(toNumber(input2));


function toNumberNew(input) {
    let i = 0;
    while (i < input.length) {
        let letter = input[i];
        if(letter.toLowerCase() === letter) {
            input[i] = letter.charCodeAt(0)-96;
        } else {
            input[i] =letter.charCodeAt(0)-64;
        }

        i++;
    }
    return input;
}

let input3 = ['e', 'd', 'c', 'd', 'e'];
console.log(toNumberNew(input3));



