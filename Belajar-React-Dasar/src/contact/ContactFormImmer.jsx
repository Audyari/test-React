import { useImmer } from "use-immer";


const initialData = {
    name: "",
    message: ""
}

export default function ContactForm() {

    const [contact, setContact] = useImmer(initialData)

    function handleNameChange(e) {
        setContact(contact => {
            contact.name = e.target.value;
        })
    }

    function handleMessageChange(e) {
        setContact(contact => {
            contact.message = e.target.value;
        })
    }


    return (
        <>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} ></input>
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} ></input>
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.name}</p>
            <p>Message : {contact.message}</p>
        </>
    );
}
