# Udacity React Session 2 - Shopping Cart

## Introduction

You will be creating a simple full functional shopping cart, I will use json placeholder to fake the back end calls.

## useEffect

- useEffect is special function that takes 2 parameter a function and dependency, the function will only run if the specified dependency changed.
- useEffect runs after every component evaluation.
- for empty dependency array list [] will only run once act as componentDidMount.
- Data fetching is side effect.
- Don’t use useEffect without dependency it will run each time you re-evaluate
- Setter function can be added to dependency, but react they will not change the setters so we can omit it.
- Use when you have code that should be executed when something happen
- We should add component state and props to dependency in case of parent changed and re-render our component
- we don’t add browser of js API function
- Clean up function
- Cleanup will run before every new side effect execution and before component is removed except the first time and 
We can use multiple useEffect

- Clean up will run after component destroy in case of empty array
