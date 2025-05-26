export default function AlertButton1( {text, message} ) {
    
    function handleClick() {
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}
