import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
