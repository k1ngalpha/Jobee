import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddListing from "./pages/AddListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
