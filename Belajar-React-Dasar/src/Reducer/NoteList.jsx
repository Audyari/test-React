import Note from "./Note";

export default function NoteList({notes = [], onChange, onDelete}) {
    return (
       <ul>
        {notes.map(note => (
            <Note key={note.id} note={note} onChange={onChange} onDelete={() => onDelete(note.id)} />
        ))}
       </ul>
    );
}