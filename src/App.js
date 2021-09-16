import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  // function
  const handleSubmit = (e) => {
    e.preventDefault();
    setText([]);
    for (let i = 0; i < count; i++) {
      const randomIndice = Math.floor(Math.random() * data.length);
      setText((prevText) => [...prevText, data[randomIndice]]);
    }
    setCount(0);
  };

  return (
    <section className="section-center">
      <h3>modern lorem</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">paragraf:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          {" "}
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
