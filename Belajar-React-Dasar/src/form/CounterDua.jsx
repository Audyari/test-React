import { useState } from "react";

export default function CounterDua() {
    const [Counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(Counter + 1);
        console.log(Counter + 1);
    }

    function handleClickDua() {
        setCounter(Counter - 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleClickDua}>Decrement</button>
            <h1>Counter: {Counter}</h1>
        </div>
    );
}