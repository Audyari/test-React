import { useState } from "react"
import { useImmer } from "use-immer";



export default function Task() {

    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);



    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        setItems((items) => {
            items.push(item);
        });
        setItem("");
    }

    // console.log("DI RENDER");

    return (
        <>
            <h1>Create Task</h1>

            <form action="">
                <input type="text" value={item} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
            <h1>List Tasks</h1>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>)
                }
            </ul>


        </>
    )
}