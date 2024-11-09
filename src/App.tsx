import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./pages/root/Root";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
