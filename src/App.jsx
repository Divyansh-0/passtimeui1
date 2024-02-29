import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
