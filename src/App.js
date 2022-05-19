import * as React from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = React.useState([]);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        const getPosts = async () => {
            let posts = await (
                await fetch("https://jsonplaceholder.typicode.com/posts")
            ).json();
            posts = posts.sort((a, b) => a.title.localeCompare(b.title));
            setPosts(posts);
        };
        getPosts();
    }, []);

    const filteredPosts = posts.filter((post) => {
        const substr = post.title.substring(0, search.length);
        return search === substr;
    });

    return (
        <div className="App">
            <header className="App-header">
                <label htmlFor="search">Search</label>
                <input
                    style={{ marginLeft: 16 }}
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>
            <main>
                {filteredPosts.map((post) => (
                    <div key={post.title}>{post.title}</div>
                ))}
            </main>
        </div>
    );
}

export default App;
