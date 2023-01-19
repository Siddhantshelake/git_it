// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// 
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.role);
if (person.role === Role.ADMIN) {
    console.log('is author');
}
