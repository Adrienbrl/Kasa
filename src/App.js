import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/error" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
