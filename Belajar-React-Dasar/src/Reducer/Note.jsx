import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    
    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value };
        onChange(newNote);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave(e) {
        e.preventDefault();
        if (!note?.text?.trim()) return; // Jangan simpan jika text kosong
        setIsEditing(false);
    }

    function handleChangeDone(e) {
        const newNote = { ...note, done: e.target.checked };
        onChange(newNote);
    }

    function handleDelete() {
        if (window.confirm("Yakin ingin menghapus catatan ini?")) {
            onDelete();
        }
    }

    return (
        <div style={{ 
            margin: "10px 0", 
            padding: "10px", 
            border: "1px solid #ddd",
            borderRadius: "4px"
        }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input 
                    type="checkbox" 
                    checked={note?.done || false} 
                    onChange={handleChangeDone} 
                />
                
                {isEditing ? (
                    <div style={{ display: "flex", gap: "5px", flex: 1 }}>
                        <input 
                            type="text" 
                            value={note?.text || ''} 
                            onChange={handleChangeText}
                            style={{ flex: 1, padding: "5px" }}
                            autoFocus
                        />
                        <button onClick={handleSave} style={{ padding: "5px 10px" }}>
                            Simpan
                        </button>
                    </div>
                ) : (
                    <div style={{ 
                        flex: 1,
                        textDecoration: note?.done ? "line-through" : "none",
                        opacity: note?.done ? 0.7 : 1
                    }}>
                        <p style={{ margin: 0 }}>{note?.text || 'Tidak ada teks'}</p>
                    </div>
                )}

                <div style={{ display: "flex", gap: "5px" }}>
                    {!isEditing && (
                        <button onClick={handleEdit} style={{ padding: "5px 10px" }}>
                            Edit
                        </button>
                    )}
                    <button 
                        onClick={handleDelete} 
                        style={{ 
                            padding: "5px 10px",
                            backgroundColor: "#ff6b6b",
                            color: "white",
                            border: "none",
                            borderRadius: "4px"
                        }}
                    >
                        Hapus
                    </button>
                </div>
            </label>
        </div>
    );
}