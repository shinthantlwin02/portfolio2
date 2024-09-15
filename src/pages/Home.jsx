import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/services/Services.jsx";
import About from "../components/About";
import Contact from "../components/Contact";
import ThemeBtn from "../components/Theme/ThemeBtn";
import Projects from '../components/projects2/projects';


const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const iconToggle = () => {
    return setDarkMode((darkMode) => !darkMode);
  };

  const ThemeCheck = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
      return;
    }
    setDarkMode(false);
  };

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  useEffect(() => {
    ThemeCheck();
  }, []);
  return (
    <>
      <Header darkMode={darkMode} themeSwitch={themeSwitch} />
      <main className=" relative dark:bg-[#150112] dark:text-white">
        <ThemeBtn darkMode={darkMode} themeSwitch={themeSwitch} />
        <section className="">
          <Hero />
        </section>
        
        <section className=" py-[80px]">
          <Services />
        </section>
        
        <section className=" py-[80px]">
          <About />
        </section>

        <section className=" py-[80px]">
          <Projects />
        </section>
       
        <section className=" py-[80px] pb-[160px]">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
