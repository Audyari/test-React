import post from "../post.json"
import Artikel from "../Componen/Artikel";
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Simple Blog</h1>
            <div className="row">
                {post.map(({ title, tags, date }) => (
                    <div className="col-md-4 mb-4" key={title}>
                        <Artikel title={title} tags={tags} date={date} />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default HomePage;