import { useState } from "react";

export default function CounterDua() {
    const [Counter, setCounter] = useState(0);

    console.log(`render ${Counter} `)

    function handleClick() {
        setCounter(Counter + 1);
        console.log(Counter + 1);
    }

    function handleClickDua() {
        setCounter(prevCounter => {
            const newCounter = prevCounter - 1;
            console.log(newCounter);
            return newCounter;
        });
    }

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleClickDua}>Decrement</button>
            <h1>Counter: {Counter}</h1>
        </div>
    );
}