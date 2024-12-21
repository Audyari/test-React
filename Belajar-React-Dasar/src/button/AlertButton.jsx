

export default function AlertButton({ text }) {

    function handleClic(e) {
        console.info(e);
        console.info(e.target);
        alert("Button Di CLick");
    }

    return (
        <div>
            <button onClick={handleClic}>{text}</button>
        </div>

    )

}