function countUniqueValues(anArr) {
// set i to start at index 0
    let i = 0;
// if anArr.length has nothing, return 0
    if ( anArr.length === 0 ) { return 0 }
    for ( let j=0; j < anArr.length; j++ ) {


//* i keeps track of how many unique numbers there are!
// If i does not equal j then add 1 to i
        if ( anArr[i] !== anArr[j]) {
            i++;
            anArr[i] = anArr[j]
        }
        
    }
    return i + 1
}
console.log(countUniqueValues([1,1,1,2,2,2]))