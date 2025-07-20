import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import RouteSelector from "./components/RouteSelector";
import TechPortfolio from "./components/TechPortfolio";
import GeneralPortfolio from "./components/GeneralPortfolio";

function App() {
  return (
    <ThemeProvider>
      <Router basename="/jmayer">
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<RouteSelector />} />
            <Route path="/tech" element={<TechPortfolio />} />
            <Route path="/general" element={<GeneralPortfolio />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
