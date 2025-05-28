import { useState } from "react";

export default function Counter({name}) {
    
    const [count, setCount] = useState(0);
    
    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
