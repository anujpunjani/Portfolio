import React from "react";
import "./App.css";
import {
  Heading,
  SideBar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
  MobileNav,
} from "./components";
import ScrollTopButton from "./components/buttons/ScrollTopButton";

function App() {
  return (
    <div className="grid grid-cols-[60px_1fr] max-md:grid-cols-1">
      <SideBar />
      <MobileNav />
      <main id="main">
        <Heading />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <ScrollTopButton />
      </main>
    </div>
  );
}

export default App;
