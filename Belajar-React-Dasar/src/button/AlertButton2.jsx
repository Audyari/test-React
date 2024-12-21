
export default function AlertButton({ text, message }) {

    function handleClic() {
        alert(message);
    }

    return (
        <div>
            <button onClick={handleClic}>{text}</button>
        </div>

    )

}