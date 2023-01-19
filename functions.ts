// In case of function explicitly specify return type also
function ConsoleError(err:string):void {
    console.log(err);
    
    
}

function HandleError(err:string):never {
    console.log(err);
    
    throw new Error(err);
    
    
}
console.log(HandleError('error'));
/*
error
undefined


*/

// combine should accept any function which takes 2 arguments and return a number
let combine:(a:number,b:number)=>number;





export{};
