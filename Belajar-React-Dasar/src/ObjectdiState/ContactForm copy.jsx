import { useImmer } from "use-immer";

export default function ContactForm() {
    
    const [contact, updateContact] = useImmer({
        name: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
    };

    const handleNameChange = (e) => {
        updateContact(draft => {
            draft.name = e.target.value;
        });
    };

    const handleMessageChange = (e) => {
        updateContact(draft => {
            draft.message = e.target.value;
        });
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
