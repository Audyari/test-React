export default function SearchForm() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <button onClick={(e) => {
                e.preventDefault();
                alert('Search');
                console.log('Search')
            }} type="submit">Search</button>
        </form>
    );
}