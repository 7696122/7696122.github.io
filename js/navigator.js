// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// let script = document.createElement("script");

// // can load any script, from any domain
// script.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";
// document.head.append(script);

const _style = `
button {
  color: white;
  background: black;
  border: 0;
  margin: 5px;
}

button:hover {
  color: gray;
  cursor: pointer;
}
`;

/**
 * 앞으로
 */
class ForwordButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      history.forward();
    });

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = _style;

    const forwardButton = document.createElement("button");
    forwardButton.textContent = ">>";

    shadow.append(style, forwardButton);
  }
}

/**
 * 뒤로
 */
class BackButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      history.back();
    });

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = _style;

    const backButton = document.createElement("button");
    backButton.textContent = "<<";

    shadow.append(style, backButton);
  }
}

class UpButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      window.location.pathname = _(window.location.pathname)
        .split("/")
        .without("")
        .dropRight()
        .join("/");
    });

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = _style;

    const backButton = document.createElement("button");
    backButton.textContent = "..";

    shadow.append(style, backButton);
  }
}

class HomeButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      window.location.replace(window.location.origin);
    });

    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = _style;

    const homeButton = document.createElement("button");
    homeButton.textContent = "@";

    shadow.append(style, homeButton);
  }
}

window.customElements.define("back-button", BackButton);
window.customElements.define("forward-button", ForwordButton);
window.customElements.define("up-button", UpButton);
window.customElements.define("home-button", HomeButton);
