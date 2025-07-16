import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import logo from "./assets/logo.png";
import { lazy, Suspense, useEffect } from "react";
import PageNotFound from "./Pages/PageNotFound";
import DronePage from "./Pages/DronePage";
import ShieldPage from "./Pages/ShieldPage";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Solution = lazy(() => import("./Pages/Solution"));
const ArmorPage = lazy(() => import("./Pages/ArmorPage"));
const GearPage = lazy(() => import("./Pages/GearPage"));
const DefensePage = lazy(() => import("./Pages/DefensePage"));

const loadingLogoStyle = {
  width: "90px",
  height: "90px",
  animation: "scaleLogo 1.5s ease-in-out infinite alternate",
  backgroundColor: "#2A2928",
  padding: "4px",
  borderRadius: "100%",
};

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      {/* Routes with Suspense for lazy loading */}
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <img src={logo} alt="Loading logo" style={loadingLogoStyle} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/arm" element={<ArmorPage />} />
          <Route path="/gear" element={<GearPage />} />
          <Route path="/drone" element={<DronePage />} />
          <Route path="/shield" element={<ShieldPage />} />
          <Route path="/defense" element={<DefensePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
