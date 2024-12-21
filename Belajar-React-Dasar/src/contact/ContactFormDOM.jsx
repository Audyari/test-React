
export default function ContactForm() {
    let contact = {
        name: "",
        message: ""
    };

    function handleNameChange(e) {
        contact.name = e.target.value;
        document.getElementById('nameDisplay').innerText = `Name: ${contact.name}`;
    }

    function handleMessageChange(e) {
        contact.message = e.target.value;
        document.getElementById('messageDisplay').innerText = `Message: ${contact.message}`;
    }

    return (
        <>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Name" onChange={handleNameChange}></input>
                <br />
                <input type="text" placeholder="Message" onChange={handleMessageChange}></input>
            </form>
            <h1>Contact Detail</h1>
            <p id="nameDisplay">Name: {contact.name}</p>
            <p id="messageDisplay">Message: {contact.message}</p>
        </>
    );
}