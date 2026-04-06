const num = [10,15,20,25];
num.forEach((value,index)=>console.log(value+30,index));


for(const i in num){
    console.log(i,num[i]+30);
}


const user={name:"Anish",age:20,Hobby:"Coding"};
for(const index in user){console.log(index,user[index])}

const person={name:"Anish",age:20,Hobby:"Coding"};
for(const index of person){console.log(index,person[index])}