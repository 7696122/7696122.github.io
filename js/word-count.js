// Create a class for the element
class WordCount extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    const count = `Words: ${countWords(wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    const p = document.createElement("p");

    // Create text node and add word count to it
    const text = document.createElement("span");
    text.textContent = count;

    p.appendChild(text);
    // Append it to the shadow root
    shadow.appendChild(p);

    // Update count when element content changes
    setInterval(function () {
      const count = `Words: ${countWords(wcParent)}`;
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
// customElements.define("word-count", WordCount, { extends: "p" });
customElements.define("word-count", WordCount);
