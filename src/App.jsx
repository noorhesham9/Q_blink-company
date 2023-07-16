import { ThemeProvider } from "@emotion/react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Landing from "./components/landing/Landing";
import { Box } from "@mui/material";
import { useState } from "react";
// import Testimonials from "./components/testimonials/Testimonials";
// import { Stack } from "@mui/material";
function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  // const [mode, setMode] = useState("light");
  // const modeTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    <Box className={theme}>
      <Header />
      <Landing />
      <About />
      {/* <Testimonials /> */}
      <Works />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
