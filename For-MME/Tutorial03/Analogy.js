// As a JavaScript function:
function sayHello(name) {
  return `Hello, ${name}`;
}
sayHello("Alice"); // "Alice" is the argument

// As a React Component:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// "name" is the prop passed via a JSX attribute:
<Welcome name="Alice" /> 

