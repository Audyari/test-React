export default function Toolbar({ onClick }) {
    return (
        <div onClick={onClick} style={{ background: "blue", padding: "10px" }}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    );
}