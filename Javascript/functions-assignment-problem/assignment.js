// function sayHello(name) {
//   console.log("Hi " + name);
// }

sayHello((name) => {
  console.log(`Hi ${name}!`);
});

const sayHelloB = (greeting, name) => {
  console.log(`${greeting} ${name}`);
};
