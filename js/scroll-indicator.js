class ScrollIndicator extends HTMLElement {
  constructor() {
    super();
  }

  render() {
    this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.setAttribute("class", "progress-container");

    const bar = document.createElement("div");
    bar.setAttribute("class", "progress-bar");
    bar.setAttribute("id", "myBar");

    container.append(bar);

    const style = document.createElement("style");
    style.textContent = `
/* Style the header: fixed position (always stay at the top) */
/* The progress container (grey background) */
.progress-container {
  width: 100%;
  height: 8px;
  background: black;
  // border-radius: 0 0 8px 8px;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 8px;
  background: yellowgreen;
  width: 0%;
  // border-radius: 0 0 8px 8px;
}
    `;

    this.shadowRoot.append(style, container);

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      handleScroll();
    };

    function handleScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      bar.style.width = (scrolled <= 100 ? scrolled : 100) + "%";
    }
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
  // disconnectedCallback() {
  //   /* ... */
  // }
  // static get observedAttributes() {
  //   return [
  //     /* ... */
  //   ];
  // }
  // attributeChangedCallback(name, oldValue, newValue) {
  //   /* ... */
  // }
  // adoptedCallback() {
  //   /* ... */
  // }
}

customElements.define(
  "scroll-indicator",
  ScrollIndicator
  // {extends: "div"}
);
