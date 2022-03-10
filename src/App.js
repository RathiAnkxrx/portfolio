import Header from "./Components/Header";
import About from "./Components/Main/About";
import Home from "./Components/Main/Home";
import GlobalStyle from "./globalStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Main/Projects";
import Contact from "./Components/Main/Contact";
import Footer from "./Components/Footer";
function App() {
  Aos.init({});
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
