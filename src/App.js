import "./index.css";
import "./App.css";

import { useState } from "react";

function App() {
  const [arrinput, setinputarr] = useState([]);
  const [input, setinput] = useState({ URL1: "" }, { URL2: "" }, { URL3: "" });

  function handleChanger(event) {
    setinput({ ...input, [event.target.name]: event.target.value });
  }

  let { URL1, URL2, URL3 } = input;

  function handleSubmit(e) {
    e.preventDefault();
    setinputarr([...arrinput, { URL1, URL2, URL3 }]);
  }

  return (
    <div className="App">
      <div className="head">
        <h1>Image Loader</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <table>
          <label>Image URL 1</label>
          <br></br>
          <input
            type="text"
            name="URL1"
            placeholder="Enter the Image URL 1"
            value={input.URL1}
            onChange={handleChanger}
          />
          <br></br>
          <label>Image URL 2</label>
          <br></br>
          <input
            type="text"
            name="URL2"
            placeholder="Enter the Image URL 2"
            value={input.URL2}
            onChange={handleChanger}
          />
          <br></br>
          <label>Image URL 3</label>
          <br></br>
          <input
            type="text"
            name="URL3"
            placeholder="Enter the Image URL 3"
            value={input.URL3}
            onChange={handleChanger}
          />
        </table>
        <button type="submit">Create</button>
      </form>
      <h1>Image List</h1>
      <div className="output">
        {arrinput.map((info, ind) => {
          return (
            <div class="row" key={ind}>
              <img src={info.URL1} alt="Url1" />
              <img src={info.URL2} alt="Url2" />
              <img src={info.URL3} alt="Url3" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
