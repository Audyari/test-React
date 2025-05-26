
export default function AlertButton() {

    function handleClick() {
        alert("Button clicked!");
        console.log("Button clicked!");
    }

    return (
        <button onClick={handleClick}>Click me</button>
    );
}