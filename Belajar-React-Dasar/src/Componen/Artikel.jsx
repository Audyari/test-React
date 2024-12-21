
import './Artikel.css';

function Artikel({ title, tags, date }) {
    return (
        <div className="artikel">
            <h2>{title}</h2>
            <p>Tanggal: {date}</p>
            <p>Tag: {tags.join(', ')}</p>
        </div>
    );
}

export default Artikel;