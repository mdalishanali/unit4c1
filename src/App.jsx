import { useState } from "react";
import "./App.css";

function App() {
  const addition = () => {};
  const [counter, setCounter] = useState(13);
  const bInc = (val) => {
    setCounter(counter + val);
  };

  const [pen, setPen] = useState(10);
  const penInc = (val) => {
    setPen(pen + val);
  };

  const [note, setNote] = useState(44);
  const noteInc = (val) => {
    setNote(note + val);
  };

  const [ink, setInk] = useState(78);
  const inkInc = (val) => {
    setInk(ink + val);
  };

  return (
    <div className="App">
      <h1>Inventory management</h1>

      {/* all items inside one div */}
      <div>
        <div className="items">
          <span>Books:</span>
          <button
            onClick={() => {
              bInc(1);
            }}
            className="addBook"
          >
            +
          </button>
          <button
            className="remBook"
            onClick={() => {
              if (counter > 0) {
                bInc(-1);
              }
            }}
          >
            -
          </button>
          <span className="totalBooks">{counter}</span>
        </div>

        <div className="items">
          <span>Pens:</span>
          <button
            onClick={() => {
              penInc(1);
            }}
            className="addPen"
          >
            +
          </button>
          <button
            onClick={() => {
              if (counter > 0) {
                penInc(-1);
              }
            }}
            className="remPen"
          >
            -
          </button>
          <span className="totalPens">{pen}</span>
        </div>

        <div className="items">
          <span>Notebooks:</span>
          <button
            onClick={() => {
              noteInc(1);
            }}
            className="addNotebook "
          >
            +
          </button>
          <button
            onClick={() => {
              if (counter > 0) {
                noteInc(-1);
              }
            }}
            className="remNotebook"
          >
            -
          </button>
          <span className="totalNotebooks">{note}</span>
        </div>

        <div className="items">
          <span>InkPens:</span>
          <button
            onClick={() => {
              inkInc(1);
            }}
            className="addInkpen"
          >
            +
          </button>
          <button
            onClick={() => {
              if (counter > 0) {
                inkInc(-1);
              }
            }}
            className="remInkpen"
          >
            -
          </button>
          <span className="totalInkpens">{ink}</span>
        </div>
      </div>
      {/* all items inside one div */}
      <div className="total">  {counter + pen + note + ink}</div>
    </div>
  );
}

export default App;
