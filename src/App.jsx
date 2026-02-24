import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme);
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [theme]);

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <main>
      <Header theme={theme} handleClick={handleClick} />
      {/* <Form /> */}
      <section className="boxes-section">
        <ul id="task-list"></ul>
      <Footer />
      </section>

      <p className="note">Drag and drop to reorder list</p>
    </main>
  );
}
