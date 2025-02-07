# React

## Starting a react project locally using Vite

![alt text](image.png)

Hot module replacemnent is the changes made in DOM when the code is changed while testing a react app.

Module bundlers like rollup compile the small pieces of code from different files in the react project into a large and complex file.

React does diffing i.e. checks for the changes b/w old version and new version of the virtual DOM.

1. Structure the application into components
2. Defining a state for the application.

## Components

![alt text](image-2.png)

![alt text](image-1.png)

## Props

Props could be passed into the components to reuse them and display different instances with different info in their bodies.

![alt text](image-3.png)

## Conditional Rendering

![alt text](image-4.png)

## useState

![alt text](image-5.png)

When the value of a state variable changes, the component that uses the state variable re-renders.

React is a dynamic website framework only if you are using state variables that are provided through useState hook.

Hence, any component that needs to be dynamically rerendered should be made of state variables created using useState hook.

## useEffect

useEffect is used to manage sideEffects.

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-10.png)

The callback inside the useEffect() runs during the first render that is when the component mounts and then runs whenever the variables mentioned in the dependency array change.

![alt text](image-9.png)

### Wrong implementation of setInterval inside useEffect

![alt text](image-11.png)

![alt text](image-8.png)
