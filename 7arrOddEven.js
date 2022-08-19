let arr = [1,2,379,10000000,0,"str", undefined, null, true];
let even = 0;
let odd = 0;
let zero = 0;
let not = 0;

for(let i=0;i<arr.length;i++){
  if(typeof arr[i]!='number'){
    not++
  }
  else{
  if(arr[i]===0){
    zero++;
  }
  else{
    if(arr[i]%2===0){
      even++;
    }
   else {
     odd++
   }
  }
 }   
}

console.log('Четных чисел в массиве: ' + even)
console.log('Нечетных чисел в массиве: ' + odd)
console.log('Нулей в массиве: ' + zero)
console.log('Нечисловых значений в массиве: ' + not)