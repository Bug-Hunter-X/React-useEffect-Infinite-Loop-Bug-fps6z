```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set a timeout to prevent an infinite loop or use a different approach
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1 second
    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []); // Empty array means this runs only once after the initial render

  return <div>Count: {count}</div>;
}
```