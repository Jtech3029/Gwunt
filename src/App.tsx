import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./game_elements/Game";
import triss from "./assets/triss_enhanced.jpg";
import phil from "./assets/phil.jpg";
import yen from "./assets/yen.jpg";
import UpdatedCard from "./UI_Elements/Updated_Card";

enum Glimmers {
  GOLD = "via-yellow-200",
  WHITE = "via-white",
}

enum Shadows {
  BLUE = "#06b6d440",
}

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <nav> */}
        {/*   <Link to="/"> Game </Link> */}
        {/*   <Link to="/cards"> Cards </Link> */}
        {/* </nav> */}

        <Routes>
          <Route path="/" element={<Game />} />
          <Route
            path="/cards"
            element={
              <div className="h-screen w-screen flex items-center justify-center bg-black gap-8">
                <UpdatedCard
                  img={triss}
                  shadow={Shadows.BLUE}
                  glimmer={Glimmers.GOLD}
                />
                <UpdatedCard
                  img={phil}
                  shadow={Shadows.BLUE}
                  glimmer={Glimmers.GOLD}
                />
                <UpdatedCard
                  img={yen}
                  shadow={Shadows.BLUE}
                  glimmer={Glimmers.WHITE}
                  center={76.5}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
