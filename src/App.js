import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./Components/ArticlePage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("grumpy19");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Articles/:article_id"
          element={<ArticlePage user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
