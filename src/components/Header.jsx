import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

export default function Header() {
  return (
    <header>
      <h1>TODO</h1>
      <button type="button" id="theme-btn">
        <img src={iconMoon} alt="icon-moon" id="icon-moon" />
        <img src={iconSun} alt="icon-sun" class="hidden" id="icon-sun" />
      </button>
    </header>
  );
}
