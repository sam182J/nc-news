import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./Components/ArticlePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles/:article_id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
