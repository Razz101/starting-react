import "./App.css";
import "./components/grid";
import Grid from "./components/grid";
import pokemon from "./data";
import {React} from "react"


function PokemonApp() {
  const [filter, filterSet] = React.useState("");
  return (
    <div>
      <h1 className="title">Pokemon</h1>
      <input value={filter} onChange={(x) => filterSet(x.target.value)} />
      <Grid data={pokemon} />
    </div>
  );
}

export default PokemonApp;
