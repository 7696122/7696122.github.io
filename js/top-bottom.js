const body = document.getElementsByTagName("BODY")[0];
const [buttonTop, buttonBottom] = document.querySelectorAll(
  "button[type=button]"
);

const scrollingElement = document.scrollingElement || body;

const goTop = () => {
  scrollingElement.scrollTop = 0;
};

const goBottom = () => {
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
};

const onScrollHandler = () => {
  if (scrollingElement.scrollTop > 20) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }

  if (
    scrollingElement.scrollTop >
    scrollingElement.scrollHeight - scrollingElement.clientHeight - 20
  ) {
    buttonBottom.style.display = "none";
  } else {
    buttonBottom.style.display = "block";
  }
};

buttonTop.addEventListener("click", goTop);
buttonBottom.addEventListener("click", goBottom);
window.addEventListener("scroll", onScrollHandler);

onScrollHandler();
