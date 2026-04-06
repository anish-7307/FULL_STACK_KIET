let b=5;
let arr=[1,2,3,4,5];
let i=0;
let count = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }
}
console.log("No. of even numbers in the array is: "+count);