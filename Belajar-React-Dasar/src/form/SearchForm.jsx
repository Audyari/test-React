import React, { useState } from 'react';
import './SearchForm.css'; // Import the CSS file

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`You searched for: ${searchTerm}`);
    };

    return (
        <form className="search-container" onSubmit={handleSearch}>
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                type="submit"
                className="search-button"
            >
                Search
            </button>
        </form>
    );
}