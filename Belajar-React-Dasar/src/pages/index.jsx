import post from "../post.json"
import Artikel from "../Componen/Artikel";
import './HomePage.css';

function HomePage() {
    return (
        <div className="container">
            <h1>Simple Blog</h1>
            {post.map((blog, index) => (
                <Artikel
                    key={index} // Tambahkan key untuk setiap artikel
                    title={blog.title}
                    tags={blog.tags}
                    date={blog.date}
                />
            ))}
        </div>
    );
}


export default HomePage;