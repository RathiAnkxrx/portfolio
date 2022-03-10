import Header from "./Components/Header";
import About from "./Components/Main/About";
import Home from "./Components/Main/Home";
import GlobalStyle from "./globalStyle";
import Aos from "aos";
import "aos/dist/aos.css";
import Projects from "./Components/Main/Projects";
import Contact from "./Components/Main/Contact";
import Footer from "./Components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const listItem = document.querySelectorAll(".navbar");
    window.onscroll = () => {
      var current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(window.pageYOffset, sectionTop);
        if (window.pageYOffset >= sectionTop - 240) {
          current = section.getAttribute("id");
        }
      });
      listItem.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  }, []);

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
