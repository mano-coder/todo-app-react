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

  const newTask = (value, isCompleted) => {
    if (value.length === 0) return;
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          text: value,
          completed: isCompleted,
          id: crypto.randomUUID(),
        },
      ];
    });
  };

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const deleteTask = (key) => {
    return setTasks(tasks.filter((item) => item.id !== key));
  };

  const toggleCheckBox = (key) => {
    return setTasks(
      tasks.map((item) => {
        if (item.id === key) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    );
  };

  const itemsLeft = () => {
    return tasks.filter((item) => item.completed === false).length;
  };
  console.log(itemsLeft);

  return (
    <main>
      <Header theme={theme} handleClick={handleClick} />
      <Form newTask={newTask} />
      <section className="boxes-section">
        <TasksList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleCheckBox={toggleCheckBox}
        />
        <Footer itemsLeft={itemsLeft} />
      </section>

      <p className="note">Drag and drop to reorder list</p>
    </main>
  );
}
