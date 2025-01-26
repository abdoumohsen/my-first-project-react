"use client";
import Main from "./components/3-main/Main";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [upbtn, setupbtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setupbtn(true);
      } else {
        setupbtn(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="border-heder" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up" style={{ opacity: upbtn ? 1 : 0, transition: "1s" }}>
        <button className="upbutton">
          <svg
            id="arrowup"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </button>
      </a>
    </div>
  );
}
