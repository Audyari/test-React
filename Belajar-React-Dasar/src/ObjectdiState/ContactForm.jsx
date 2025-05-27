import { useState } from "react";

export default function ContactForm() {
    
    const [contact, setContact] = useState({
        name: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    };

    const handleNameChange = (e) => {
        setContact((stateSebelumnya) => ({
            ...stateSebelumnya,
            name: e.target.value
        }));
        //handleSubmit(e);
    };

    const handleMessageChange = (e) => {
        setContact((stateSebelumnya) => ({
            ...stateSebelumnya,
            message: e.target.value
        }));
        //handleSubmit(e);
    };

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={contact.name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={contact.message} onChange={handleMessageChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            <p>Name: {contact.name}</p>
            <p>Message: {contact.message}</p>
        </div>
    );
}
