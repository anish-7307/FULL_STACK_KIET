let promise = new Promise((resolve, reject)=> {
    let success = true;
    if(success){
        resolve("Promise resolved sucessfully");
    }else{
        reject("Promise rejected");
    }
});

promise.then((message)=>{
    console.log(message);
})