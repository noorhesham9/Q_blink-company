import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/landing/Landing";
import Testimonials from "./components/testimonials/Testimonials";
// import { Stack } from "@mui/material";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

export default App;
