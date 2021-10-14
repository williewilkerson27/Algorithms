// function validAnagram(str1, str2) {
//     // add whatever parameters you deem necessary - good luck!
//     // I need a condition that will check all the letters in the string
//     // I need to compare the strings, use an && to compare
//     // return true if it is true and false if it is false
//     let newStr1 = str1.replace(/[^a-zA-Z]/g, '');
//     let newStr2 = str2.replace(/[^a-zA-Z]/g, '');
//     if (newStr1.length !== newStr2.length) {
//         return false;
//     }
//     else
//         return true;

// }
// validAnagram('love', 'evol')

function validAnagram(first, second) {
// I need to check if they are equal right away
    if ( first.length !== second.length ) {
        return false;
    }

// set up a variable with an empty array so you can store data
    let lookup = {}

    for ( let i=0; i < first.length; i++ ) {
        let letter = first[i];
// if letter exists, increment by 1 every instance of it, if it occurs once than it will be 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for ( let i=0; i < second.length; i++ ) {
        let letter = second[i];
// if you cant find letter or letter is zero, then it is not a anagram
        if ( !lookup[letter] ) {
            return false;
        }
        else {
            lookup[letter] -= 1
        }
}
    return true;
}
console.log(validAnagram('lalalala', 'alalalal'))
