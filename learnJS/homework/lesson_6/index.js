function sum(nums) {
    let s = 0;
    let counter = 0;
    while (counter < nums.length) {
        if(nums[counter] %3==0) {
            s+=nums[counter];
        }
        counter++;
    }
    return s;
}
let result = sum([1, 5, 1]);
console.log(result);

let result2 = sum([3, 6, 9]);
console.log(result2);