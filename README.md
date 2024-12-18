# React useEffect Infinite Loop Bug
This example demonstrates a common error in React's `useEffect` hook: creating an infinite loop by updating a state variable that's also included in the dependency array. 

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The `useEffect` hook in `bug.js` attempts to increment the `count` state variable each time it runs. Because `count` is included in the dependency array, the component re-renders infinitely, leading to a browser crash or extremely high CPU usage.