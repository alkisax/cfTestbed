const greet = (username) => {
  return `Hello, ${username}!`;
}

const sayHello = () => {
  console.log(hello);
}

const hello = username => `Hello, ${username}!`;

const add = (a, b) => a + b;

console.log(greet("World")); // Hello, World!
sayHello(); // Hello, undefined!
console.log(add(10,130))