type User={
    readonly _id:string // read-only parameter
    name:string;
    email:String;
    isActive:boolean,
    creditCardDetails?:number // optinal parameter 
}


let myUser:User={
    _id:"1234",
    name:"Siddhant",
    email:"sid@gmail.com",
    isActive:false,



}

myUser.email='abc@gmail.com';
//myUser._id='adf'; Cannot assign to '_id' because it is a read-only property.

type Person={
    name:string,
    age:number
}

const sid:Person={
    name:"siddhant",
    age:31

}