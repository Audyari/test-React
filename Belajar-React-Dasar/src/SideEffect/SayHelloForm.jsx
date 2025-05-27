export default function SayHelloForm() {

    function sayHello(e) {
        e.preventDefault();
        const name = document.getElementById("input_name").value;
        if (name === '') {
            document.getElementById("text_hello").innerText = `Hello World`;
        } else {
            document.getElementById("text_hello").innerText = `Hello ${name}`;
        }
    }
    
    return (
        <div>
            <form>
                <input id="input_name" />
                <button onClick={sayHello}>Say Hello</button>
            </form>
            <h1 id="text_hello">Hello World</h1>
        </div>
    );
}