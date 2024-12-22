import React, { useState } from 'react';
import './ArrayManager.css';

const ArrayManager = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    function tambahItem() {
        if (inputValue.trim() === '') {
            return; // Tidak menambah item jika input kosong
        }
        if (editIndex !== null) {
            perbaruiItem(editIndex, inputValue);
        } else {
            setItems([...items, inputValue]);
        }
        aturUlangInput();
    }

    function hapusItem(index) {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    }

    function perbaruiItem(index, value) {
        const updatedItems = items.map((item, i) =>
            i === index ? value : item
        );
        setItems(updatedItems);
        setEditIndex(null);
    }

    function editItem(index) {
        setInputValue(items[index]);
        setEditIndex(index);
    }

    function urutkanItem() {
        const sortedItems = [...items].sort((a, b) => a.localeCompare(b));
        setItems(sortedItems);
    }

    function aturUlangInput() {
        setInputValue('');
    }

    return (
        <div className="container">
            <h1>Manajer Array</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Masukkan item..."
            />
            <button onClick={tambahItem}>
                {editIndex !== null ? 'Perbarui Item' : 'Tambah Item'}
            </button>
            <button onClick={urutkanItem}>Urutkan Item</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <div>
                            <button
                                onClick={() => editItem(index)}
                                disabled={editIndex !== null} // Disable jika sedang dalam mode edit
                            >
                                Edit
                            </button>
                            <button onClick={() => hapusItem(index)}>Hapus</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArrayManager;