import "./App.css";
import React, { useState } from "react";
import { ReactReader } from "react-reader";
import { Link } from "react-router-dom";
import Book1 from "./routes/book1";
import Book2 from "./routes/book2";
import Book3 from "./routes/book3";

const styling = {
  align: "center",
};

function App() {
  return (
    <div>
      <h1
        style={{ textAlign: "center", fontFamily: "  Courier New, monospace" }}
      >
        EPUB Reader
      </h1>
      <ul style={{ display: "table", margin: "0 auto" }}>
        <li>
          <Link to="/book1">Book 1</Link>
        </li>
        <li>
          <Link to="/book2">Book 2</Link>
        </li>
        <li>
          <Link to="/book3">Book 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
