
export default function AlertButton({text,message}) {

    function handleClick(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.textContent);
        console.log(e.target.value);
        console.log(e.target.innerHTML);
        alert(message);
    }

    return (
        <button onClick={handleClick}>{text}</button>
    );
}