import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  return (
    <main>
      <Header />
      <Form />
      <section class="boxes-section">
        <ul id="task-list"></ul>
        <Footer />
      </section>

      <p class="note">Drag and drop to reorder list</p>
    </main>
  );
}
