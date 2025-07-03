import "./App.css";
import Card from "./UI_Elements/Card";
import Game from "./Game_Elements/Game";

function App() {
  return (
    <>
      <Game />

      <div className="h-full w-full">
        <Card />
      </div>
    </>
  );
}

export default App;
