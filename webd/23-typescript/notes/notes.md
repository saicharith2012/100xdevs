# Typescript

## Compiled vs Interpreted Languages

![alt text](image-1.png)

## Strongly typed and loosely typed Languages

![alt text](image.png)

People realised that javascript is a very powerful language, but lacks types.

**Typescript** was introduced as a new language to add _types_ on top of javascript.

## What is Typescript?

![alt text](image-2.png)

## Where/How does typescript code run?

![alt text](image-3.png)

## Typescript Compiler

![alt text](image-4.png)

## The `tsc` compiler

![alt text](image-5.png)

![alt text](image-6.png)

Notice how there is no typescript code in the javascript file. It's plain old js file with no types.

![alt text](image-7.png)

## Basic Types in Typescript

Typescript provides some basic types:

**_number_**, **_string_**, **_boolean_**, **_null_**, **_undefined_**.

**any**: if no type is declared for a variable, implicity it is considered "any"

![alt text](image-10.png)

But the tsc compiler doesn't accept implicit declaration of "any", hence the variable must be explicitly declared with "any".

![alt text](image-8.png)

- But it is best practice to never use **any**. Since it defeats the purpose of typescript.
- Multiple types can be declared for a variable using OR operator like:
  ![alt text](image-9.png)

## The `tsconfig` file

![alt text](image-11.png)
