import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TasksList from "./components/TasksList";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  useEffect(() => {
    // Save Theme
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main>
      <Header theme={theme} handleClick={handleClick} />
      <Form />
      <section className="boxes-section">
        <TasksList tasks={tasks} />
        <Footer />
      </section>

      <p className="note">Drag and drop to reorder list</p>
    </main>
  );
}
