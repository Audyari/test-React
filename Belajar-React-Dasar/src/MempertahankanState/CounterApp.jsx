
import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {

    const [show2, setShow2] = useState(true);
    const [show3, setShow3] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked);
    }

    function handleChange2(e) {
        setShow3(!show3);
    }
    return (
        <div>
            <Counter name="Counter 1" />       
            {show2 && <Counter name="Counter 2" />}
            <input type="checkbox" onChange={handleChange} checked={show2} />

            <h1>Counter App</h1>
            {show3 ? <Counter name="Counter 2" /> : <Counter name="Counter 1" />}
            <input type="checkbox" onChange={handleChange2} checked={show3} />
        </div>
    );
}