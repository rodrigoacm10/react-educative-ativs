import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>O contador está em</h1>
        <h1>{count}</h1>
        <button
          className="button"
          style={{
            marginTop: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "100000000px",
          }}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="button"
          style={{
            marginTop: "20px",
            width: "50px",
            height: "50px",
            borderRadius: "100000000px",
          }}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
