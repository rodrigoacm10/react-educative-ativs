import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [poke, setPoke] = useState();
  const [otherPoke, setOtherPoke] = useState();
  const [inputPoke, setInputPoke] = useState("");

  const getPokemon = async () => {
    const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    setPoke(pokemon.data);
    console.log(pokemon.data.sprites.front_default);
  };

  const getOtherPoke = async () => {
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${inputPoke}`
    );
    setOtherPoke(pokemon.data);
    console.log(pokemon.data.sprites.front_default);
  };

  useEffect(() => {
    getPokemon();
    console.log("a");
    console.log(poke);
  }, []);

  return (
    <div style={{}}>
      <h1>O meu pokemon favorito é o:</h1>
      <p style={{ fontSize: "40px", fontWeight: 700 }}>
        {poke ? poke.name : "não tem nome"}
      </p>
      {poke ? (
        <img
          style={{ width: "200px", height: "200px" }}
          src={`${poke.sprites.front_default}`}
          alt="aa"
        />
      ) : (
        <p>Não contém foto</p>
      )}
      <p>Qual é o seu?</p>

      <input
        onChange={(e) => setInputPoke(e.target.value)}
        style={{ width: "200px" }}
        type="text"
      />
      <button onClick={() => getOtherPoke()}>{">"}</button>
      {/* <img src={`${poke.sprites.front_default}`} alt="aa" /> */}
      {otherPoke && <h1>{otherPoke.name}</h1>}
      {otherPoke && (
        <img
          style={{ width: "200px", height: "200px" }}
          src={`${otherPoke.sprites.front_default}`}
          alt="aa"
        />
      )}
    </div>
  );
}

export default App;
