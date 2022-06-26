// let number1=0;
//    let number2 = 0;
// var twoSum = function(nums, target) {
   
//   for(let i = 0; i <nums.length; i++ ){
//    for(let j=i+1 ; j<nums.length; j++){
//    if(nums[i] + nums[j] === target ){
//       console.log(`[${i},${j}]`);
//   }
// }
// }
//    }

// twoSum([2,7,11,15,2],9);
// twoSum([3,6,3,6],9);
// twoSum([3,3,2,5,2],6);
// twoSum([3,2,4],6);
// console.log(lent);


var addTwoNumbers = function(l1, l2) {
   l1.reverse();
   l2.reverse();
   var result1=0;
   var result2=0;
  
      var result1 = l1.join('');
   console.log(result1);
   var result2 = l2.join('');
   console.log(result2);
   
   const result=parseInt( result1)+parseInt( result2);
   let myFunc = num => Number(num);
  
var intArr = Array.from(String(result), myFunc);
return intArr.reverse();

  
};
addTwoNumbers([2,3,4],[1,5,2]);