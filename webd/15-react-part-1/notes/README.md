# React

## Starting a react project locally using Vite

![alt text](image.png)

Hot module replacement is the changes made in DOM when the code is changed while testing a react app.

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

## Children

![alt text](image-12.png)

Wrapper component.
![alt text](image-14.png)

## Lists and Keys

![alt text](image-16.png)

![alt text](image-13.png)

![alt text](image-15.png)

## Class Based vs Functional Components

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)

## Lifecycle events

![alt text](image-21.png)

lifecycle events in class based components.
![alt text](image-23.png)

![alt text](image-22.png)

## Error Boundary

Containing an error within the component in which it is thrown, by
implementing a fallback UI for the component to render when the error is thrown.

This is particularly useful for improving the user experience by gracefully handling unexpected errors.

![alt text](image-24.png)

Error Boundary is implemented using class based components.

![alt text](image-25.png)

![alt text](image-26.png)

## Fragments

In functional components, A function can return only one parent element. To send multiple elements, there must be a parent element wrapping them.

To skip wrapping them with a parent element and to make sure the root element has multiple children, those children could be wrapped with a <></> (fragment), making them behave as one element.

![alt text](image-27.png)
