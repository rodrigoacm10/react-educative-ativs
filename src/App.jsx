import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./componentes/counter";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return <Counter />;
}

export default App;
