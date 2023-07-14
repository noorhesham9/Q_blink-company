import "./App.css";
import About from "./components/About/About";
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/landing/Landing";
import { Stack } from "@mui/material";
function App() {
  return (
    <>
      <Header />
      <Landing />
      <About />
    </>
  );
}

export default App;
