"use client";

import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [showmodel, setshowmodel] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <header>
      <button
        className="menu "
        onClick={() => {
          setshowmodel(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>{" "}
      </button>

      {showmodel && (
        <div className="lyer">
          <ul className="model">
            <li className="close">
              <button
                onClick={() => {
                  setshowmodel(false);
                }}
              >
                <svg
                  id="CloseBtn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <div className="divider" />
            <li>
              <a href="">articles</a>
            </li>
            <div className="divider" />

            <li>
              <a href="">projects</a>
            </li>
            <div className="divider" />

            <li>
              <a href="">speaking</a>
            </li>
            <div className="divider" />
            <li>
              <a href="">contact</a>
            </li>
          </ul>
        </div>
      )}
      <div />
      <nav>
        <ul>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          // document.body.classList.toggle("light");
          localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
          settheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme ==="dark"?
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>}
      </button>
    </header>
  );
}
