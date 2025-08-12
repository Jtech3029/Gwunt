import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./game_elements/Game";
import UpdatedCard from "./UI_Elements/Updated_Card";

import triss from "./assets/triss_enhanced.jpg?url";
import phil from "./assets/phil.jpg?url";
import yen from "./assets/yen.jpg?url";

import * as Utils from "./UI_Elements/UI_Utilities.ts";

function App() {
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
                  shadow={Utils.Shadows.BLUE}
                  glimmer={Utils.Glimmers.GOLD}
                  center={48}
                  transitionConfig={Utils.useTransitionConfig()}
                  hoverConfig={Utils.useHoverConfig(Utils.HoverColors.PINK)}
                />
                <UpdatedCard
                  img={phil}
                  shadow={Utils.Shadows.BLUE}
                  glimmer={Utils.Glimmers.GOLD}
                  center={0}
                  transitionConfig={Utils.useTransitionConfig()}
                  hoverConfig={Utils.useHoverConfig(Utils.HoverColors.PINK)}
                />
                <UpdatedCard
                  img={yen}
                  shadow={Utils.Shadows.GOLD}
                  glimmer={Utils.Glimmers.WHITE}
                  center={76.5}
                  transitionConfig={Utils.useTransitionConfig()}
                  hoverConfig={Utils.useHoverConfig(Utils.HoverColors.PINK)}
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
