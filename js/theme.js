class ThemeButton extends HTMLElement {
  constructor() {
    super();

    this.THEME_KEY = "theme";
    this.MODE = ["light", "dark"];

    var element = document.body;
    this.theme === "dark"
      ? element.classList.add("dark-mode")
      : element.classList.remove("dark-mode");

    const shadow = this.attachShadow({ mode: "open" });
    const themeButton = document.createElement("button");
    themeButton.textContent = "테마변경";
    themeButton.onclick = this.toggle;
    shadow.appendChild(themeButton);
  }

  get theme() {
    return localStorage.getItem(this.THEME_KEY);
  }

  set theme(_theme) {
    localStorage.setItem(this.THEME_KEY, _theme);
  }

  toggle = (e) => {
    const { target } = e;
    var element = document.body;
    element.classList.toggle("dark-mode");
    this.theme = !!element.classList.contains("dark-mode") ? "dark" : "light";
  };
}

window.customElements.define("theme-button", ThemeButton);
