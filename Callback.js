function greet(){
    console.log("Welcome");
}
function execute(fn)
{
    fn();
}
execute(greet());






//Map

/*const number=[1,2,3]; 
const newnumber=number.map(function(n){
    return n*2;
});

console.log(newnumber);*/



/*const newnumber=Number.map(n=>n*2); //=><li>(n)<li\>

console.log(newnumber);*/






//filter

const newnum = Number.filter((n)=>n%2==0)

const n=[...Number,5]