import './SayHelloForm.css';

export default function SayHelloForm() {

    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("input_name").value;
        document.getElementById("text_hello").innerText = `Hello ${name}`;
    }

    return (
        <div className="container">
            <form className="form">
                <input
                    type="text"
                    id="input_name"
                    className="input"
                    placeholder="Enter your name"
                />
                <button
                    className="button"
                    onClick={handleClick}
                >
                    Say Hello
                </button>
            </form>
            <h1 id="text_hello" className="heading">Hello World</h1>
        </div>
    )
}