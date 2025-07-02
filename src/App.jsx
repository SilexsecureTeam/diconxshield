import "./App.css";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import { lazy, Suspense } from "react";
import PageNotFound from "./Pages/PageNotFound";

const Home = lazy(() => import("./Pages/Home"));
// const About = lazy(() => import("./Pages/About"));

const loadingLogoStyle = {
  width: "90px",
  height: "90px",
  animation: "scaleLogo 1.5s ease-in-out infinite alternate",
  backgroundColor: "#2A2928",
  padding: "4px",
  borderRadius: "100%",
};

function App() {
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
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
