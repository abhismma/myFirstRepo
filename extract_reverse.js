function extractReverse(arr){
   let subArr= arr.splice(2,4);
    return subArr.reverse();
}
let arr = [1,3,5,,6,7]
console.log(extractReverse(arr))