const person={key:"Hello"};
console.log(person.key);
person.key="bye";
console.log(person.key);

const arr=["HTML","CSS","JS"];
console.log(arr);
arr.push("ReactJS");
console.log(arr);


const sales = "Toyota";
function carType(name){
    return name==="Honda"?name:"Sorry, we don,t sell this car";
}
const car={carn:"City",getCar:carType("Honda"),special:sales};

console.log(car.carn);
console.log(car.getCar);
console.log(car.special);