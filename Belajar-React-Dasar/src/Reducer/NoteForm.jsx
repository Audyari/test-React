import { useState } from "react";

export default function NoteForm({onAddNote}) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }
    
function handleClick(e) {
    e.preventDefault();
    onAddNote(text);  // Kirim nilai text langsung
    setText("");
}
    
    return (
      // Ganti onClick di form menjadi onSubmit
     
          <form onSubmit={handleClick}>
              <input type="text" value={text} onChange={handleChange} />
              <button type="submit">Add Note</button>
          </form>
      );
}