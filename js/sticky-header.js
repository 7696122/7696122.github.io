class StickyHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
/* Style the header */
.header {
position: stciky;
top: 0;
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}

/* Page content */
.content {
  padding: 16px;
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}
`;

    const container = document.createElement("header");
    container.setAttribute("id", "myHeader");

    const h1 = document.createElement("h1");
    h1.textContent = "HEADER";

    container.appendChild(h1);

    // const scrollIndicator = document.createElement("scroll-indicator");
    // container.appendChild(scrollIndicator);

    this.shadowRoot.append(style, container);

    // When the user scrolls the page, execute myFunction
    // window.onscroll = function () {
    //   // handleHeader();
    // };

    // Get the offset position of the navbar
    var sticky = container.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function handleHeader() {
      if (window.pageYOffset > sticky) {
        container.classList.add("sticky");
      } else {
        container.classList.remove("sticky");
      }
    }
  }
}

customElements.define(
  "sticky-header",
  StickyHeader
  // {extends: "div"}
);
