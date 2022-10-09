import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/layouts/Header";
import NavBar from "./components/layouts/NavBar";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import PostList from "./components/posts/PostList";
import PostDetail from "./components/posts/PostDetail";
import PostCreate from "./components/posts/PostCreate";
import PostUpdate from "./components/posts/PostUpdate";
import { useSelector } from "react-redux";
import NavBarLoggedIn from "./components/layouts/NavBarLoggedIn";
import Generate from "./components/generate/Generate";

function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <Router>
      {token !== null ? <NavBarLoggedIn /> : <NavBar />}

      <Routes>
        <Route index element={<Header />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/post/create" element={<PostCreate />} />
        <Route exact path="/posts" element={<PostList />} />
        <Route exact path="/post/:id" element={<PostDetail />} />
        <Route exact path="/post/:id/edit" element={<PostUpdate />} />
        <Route exact path="/generate" element={<Generate />} />
      </Routes>
    </Router>
  );
}

export default App;
