import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { PostsProvider } from "./context/PostsContext";
import PostDetail from "./components/PostDetail";
import PostCreator from "./components/PostCreator";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <>
      <div className="container-app">
        <PostsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostContainer />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/create" element={<PostCreator />} />
          </Routes>
        </PostsProvider>
      </div>
    </>
  );
}

export default App;
