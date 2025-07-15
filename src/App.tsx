import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./game_elements/Game";
import UpdatedCard from "./UI_Elements/Updated_Card";

import triss from "./assets/triss_enhanced.jpg?url";
import phil from "./assets/phil.jpg?url";
import yen from "./assets/yen.jpg?url";

enum Glimmers {
  GOLD = "via-yellow-200",
  WHITE = "via-white",
}

enum Shadows {
  BLUE = "#06b6d440",
  GOLD = "#ffbf0050",
}

function App() {
  const transitionConfig = useMemo(
    () => ({
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const, // Add 'as const' to fix the type
      },
    }),
    [],
  );

  const hoverAnimation = useMemo(
    () => ({
      boxShadow: `0 0 40px 30px ${Shadows.BLUE}`,
      y: -20,
    }),
    [],
  );

  return (
    <>
      <BrowserRouter>
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
                  center={48}
                  transitionConfig={transitionConfig}
                  hoverConfig={hoverAnimation}
                />
                <UpdatedCard
                  img={phil}
                  shadow={Shadows.BLUE}
                  glimmer={Glimmers.GOLD}
                  center={0}
                  transitionConfig={transitionConfig}
                  hoverConfig={hoverAnimation}
                />
                <UpdatedCard
                  img={yen}
                  shadow={Shadows.GOLD}
                  glimmer={Glimmers.WHITE}
                  center={76.5}
                  transitionConfig={transitionConfig}
                  hoverConfig={hoverAnimation}
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
