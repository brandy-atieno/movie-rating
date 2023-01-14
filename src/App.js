import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/Page404";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Foooter";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="movie/:imdbID" element={<MovieDetail/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
