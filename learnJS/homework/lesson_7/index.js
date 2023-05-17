function revert(arr) {
    let res = [];
    let counter = 0;
    while (counter < arr.length) {
        res[arr.length-counter-1]=arr[counter];
        counter++;
    }
    return res;
}
let result = revert([1, 2, 3, 4, 5]);
console.log(result);