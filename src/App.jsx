import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Hello from "./selda";

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/selda" element={<Hello/>}/>
        </Routes>
      </Router>
  );
}

export default App;
