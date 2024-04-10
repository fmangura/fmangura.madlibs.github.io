### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a Javascript run framework. It is best used as single paged HTML web apps. 

- What is Babel?
Babel is an extension that translates JSX to proper html.

- What is JSX?
JSX means Javascript XML. It is a programming standard that lets you write HTML in React.

- How is a Component created in React?
You can make a component by setting up a new file, export a function that returns a single JSX and call that component file using the following format: <Component />

- What are some difference between state and props?
States are updatable variables that utilize useState() & setState() to initialize and update a variable respectively. Props can either be a variable or a function. They are passed down to a component to essentially help set up the component. 

- What does "downward data flow" refer to in React?
This refers to the passing of data (props) from parent component to child component. Child components cannot send up information such as props. 

- What is a controlled component?
A controlled component is a component that handles input data from forms through the use of states.

- What is an uncontrolled component?
An uncontrolled component that stores its own state within itself.

- What is the purpose of the `key` prop when rendering a list of components?
The purpose is so that when rendering componentents, they have an original identifier.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It is a poor choice because indexes are not specific enough and multiple other props can hold the same index. Additionally, indexes can grow infinitely and constant re-renders can take up space. 

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a function that occurrs at the first render of a state and after every re-render/state change. It is used as a "side effect" after every render. Some cases would be updating a DOM element, starting a timer, etc.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows react to interact with DOM elements. A change in ref value does not cause a rerender of a component. 

- When would you use a ref? When wouldn't you use one?
Setting up/clearing timers, accessing DOM elements. You should not use them to change DOM elements such as classes, text, etc.

- What is a custom hook in React? When would you want to write one?
A custom hook is a javascript function that uses the built in hooks (useState, etc.) to do a general shared function amongst other functions. You want to write one when re-factoring repetitive functions or organize functions that are cluttering a single component.