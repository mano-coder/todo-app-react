import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme");
  });
  console.log(theme);
  useEffect(() => {}, []);
  return (
    <main>
      <Header theme={theme}/>
      <Form />
      <section className="boxes-section">
        <ul id="task-list"></ul>
        <Footer />
      </section>

      <p className="note">Drag and drop to reorder list</p>
    </main>
  );
}
