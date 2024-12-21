import { useState } from "react";

export default function CounterTiga() {
    const [Counter, setCounter] = useState(0);

    function Increment() {
        setCounter(Counter + 1);

    }

    function Decrement() {
        setCounter(c => c - 1);
        setCounter(c => c - 1);
        setCounter(c => c - 1);
    }

    return (
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <h1>Counter: {Counter}</h1>
        </div >
    );
}