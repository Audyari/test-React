import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    
    const [show2, setShow2] = useState(true);
      
    function handleChange(e) {
        setShow2(e.target.checked);
    }

   
    
    return (
        <>
        <div> 
            {show2 ? <Counter name="Counter 2" /> : <p>hilang</p>}
            <input type="checkbox" onChange={handleChange} checked={show2} /> Tampilkan Counter 2
        </div>
        </>
    );
}
