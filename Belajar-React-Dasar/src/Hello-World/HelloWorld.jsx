
import './HelloWorld.css';
import React, { useState } from 'react';

export default function HelloWorld() {
    const props = {
        text: "Header Hello Word",
        textDua: "ini text DUA"
    }
    return (
        <div>
            <HeaderHelloWorld {...props} />
            <ParagrapHelloWord text="Paragrap Hello Word" />
            <Counter />
        </div>
    );
}

function HeaderHelloWorld({ text = "Ups, lupa kasih text", textDua }) {

    return (
        <div>
            <h1 className="title" >{text.toUpperCase()}</h1>
            <h2>{textDua}</h2>
        </div>

    );
}

function ParagrapHelloWord({ text = "ups, lupa kasih text" }) {
    return (
        <p className="content">{text.toLowerCase()}</p>
    );
}

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>
                Counter: {count}
            </h1>
            <button onClick={increment}>
                Tambah
            </button>
            <button onClick={decrement}>
                Kurang
            </button>
        </div>
    );
}