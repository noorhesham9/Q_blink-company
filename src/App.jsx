import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Works from "./components/Works/Works";
import Landing from "./components/landing/Landing";
// import Testimonials from "./components/testimonials/Testimonials";
// import { Stack } from "@mui/material";
function App() {
  return (
    <div className="light-theme">
      <Header />
      <Landing />
      <About />
      {/* <Testimonials /> */}
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
