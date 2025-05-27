import { useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0);
    console.info(`render ${count}`);

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={
                () => {
                    setCount(count + 3);
                    console.info(`count ${count}`);
                }
            }>Increment +3 </button>
            <p>Count: {count}</p>
        </div>
    );
}