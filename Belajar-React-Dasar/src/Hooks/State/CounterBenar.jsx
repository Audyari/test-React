import { useState } from "react";

export default function CounterBenar() {
    
    const [count, setCount] = useState(0);

    console.info(`render ${count}`);

    return (
        <div>
            <h1>Counter Benar</h1>
            <button onClick={
                () => {
                    setCount(count + 1);
                    console.info(`count ${count}`);
                }
            }>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}
