// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// let script = document.createElement("script");

// // can load any script, from any domain
// script.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js";
// document.head.append(script);

// ES6 Classes to Define the new Element Behaviour
class SuperButton extends HTMLElement {
  constructor() {
    super();
    console.log("New Super Button object has been instantiated.");
  }
}

window.customElements.define("super-button", SuperButton);

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

    const forwardButton = document.createElement("button");
    forwardButton.textContent = ">";

    shadow.appendChild(forwardButton);
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

    const backButton = document.createElement("button");
    backButton.textContent = "<";

    shadow.appendChild(backButton);
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

    const backButton = document.createElement("button");
    backButton.textContent = "^";

    shadow.appendChild(backButton);
  }
}

class HomeButton extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", (e) => {
      window.location.replace(window.location.origin);
    });

    const shadow = this.attachShadow({ mode: "open" });

    const homeButton = document.createElement("button");
    homeButton.textContent = "@";

    shadow.appendChild(homeButton);
  }
}

window.customElements.define("back-button", BackButton);
window.customElements.define("forward-button", ForwordButton);
window.customElements.define("up-button", UpButton);
window.customElements.define("home-button", HomeButton);
