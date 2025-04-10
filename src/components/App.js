// components/App.js
import React from "react";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <section id="home">
        <h2>Home Section</h2>
        <p>Welcome to the home section.</p>
      </section>

      <section id="about">
        <h2>About Section</h2>
        <p>This is the about section.</p>
      </section>
    </div>
  );
}

export default App;
