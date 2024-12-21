

export default function AlertButton({ text }) {

    function handleClic() {
        alert("Button Di CLick");
    }

    return (
        <div>
            <button onClick={handleClic}>{text}</button>
        </div>

    )

}