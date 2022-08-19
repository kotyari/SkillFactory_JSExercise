let arr = [1,2,1,1];

let x;


for(let i = 1; i<arr.length;i=i+1){
  if(arr[0]===arr[i]){
    x=true;
  }
  else {
    x=false;
    break;
       }
}
console.log(x)