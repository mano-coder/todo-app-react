import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import Toast from "./components/Toast";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [filter, setFilter] = useState("all");

  const [lastDeletedTask, setLastDeletedTask] = useState(null);

  const [showToast, setShowToast] = useState(false);

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

  useEffect(() => {
    if (showToast === true) {
      const timeout = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showToast]);

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
    setLastDeletedTask(tasks.find((item) => item.id === key));
    setShowToast(true);
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

  const filteredTasks = () => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "active") {
      return tasks.filter((item) => item.completed === false);
    } else if (filter === "completed") {
      return tasks.filter((item) => item.completed === true);
    }
  };

  const clearCompleted = () => {
    return setTasks(tasks.filter((item) => item.completed === false));
  };

  const undoDelete = () => {
    setTasks((prevState) => [...prevState, lastDeletedTask]);
  };

  return (
    <main>
      <Header theme={theme} handleClick={handleClick} />
      <Form newTask={newTask} />
      <section className="boxes-section">
        <TasksList
          tasks={filteredTasks()}
          setTasks={setTasks}
          deleteTask={deleteTask}
          toggleCheckBox={toggleCheckBox}
        />
        <Footer
          itemsLeft={itemsLeft}
          setFilter={setFilter}
          filter={filter}
          clearCompleted={clearCompleted}
        />
      </section>

      <p className="note">Drag and drop to reorder list</p>
      {<Toast showToast={showToast} undoDelete={undoDelete} />}
    </main>
  );
}
