import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import RankListWidget from "./_layouts/RankListWidget";
import Header from "./_layouts/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <RankListWidget>
          <Routes>
            <Route path = "/" element = {<Home />}  />
            <Route path = "/:id" element = {<Details />}  />
          </Routes>
        </RankListWidget>
      </Router>
    </>
  );
}

export default App;
