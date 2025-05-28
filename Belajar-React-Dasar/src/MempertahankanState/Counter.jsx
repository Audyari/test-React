import { useState } from "react";

export default function Counter({name}) {
    
    const [count, setCount] = useState(0);
    
    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter {name} : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}