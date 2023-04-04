import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import How from "./components/How";
import Meals from "./components/Meals";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/how-it-works" Component={<How />} />
        <Route path="/meals" Component={<Meals />} />
        <Route path="/pricing" Component={<Pricing />} />
        <Route path="/testimonials" Component={<Testimonial />} />
        <Route path="/cta" Component={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
