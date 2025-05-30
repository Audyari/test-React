
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmer } from "use-immer";

let id = 0;
const initialNotes = [
    {id: id++, text: "Learn HTML", done: true},
    {id: id++, text: "Learn React", done: false},
    {id: id++, text: "Learn JS", done: true},
];

export default function NoteApp() {

    const [notes, setNotes] = useImmer(initialNotes);

    function handleAddNote(text) {
       setNotes([
        ...notes,
        {
            id: id++,
            text,
            done: false
        }
       ])
    }

  
   function handleChangeNote(updatedNote) {
       setNotes(draft => {
           const index = draft.findIndex(n => n.id === updatedNote.id);
           if (index !== -1) {
               draft[index] = updatedNote;
           }
       })
   }

    function handleDeleteNote(id) {
        setNotes(draft => {
            const note = draft.find(n => n.id === id);
            draft.splice(draft.indexOf(note), 1);
        })
    }
    
    return (
        <>
        <div>
            <h1>Notes</h1>
            <NoteForm onAddNote={handleAddNote} />
            <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </div>
        <p>Number of notes: {notes.length}</p>
        </>
    );
}
