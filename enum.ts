

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// 
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};
console.log(person.role);

if (person.role === Role.ADMIN) {
  console.log('is author');
}