export default function Counter() {
    let counter = 0;

    function handleClick() {
        counter++;
        console.log(counter);
        document.getElementById('counterValue').innerText = `Counter: ${counter}`;
    }

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <h1 id="counterValue">Counter: {counter}</h1>
        </div >
    )
}