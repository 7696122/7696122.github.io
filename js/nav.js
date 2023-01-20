const path = (href) => new URL(href).pathname;

const dir = (href) => {
  let _pathname = path(href);
  return _pathname.substring(0, _pathname.lastIndexOf("/") + 1);
};

const decolateTag = (el) =>
  (el.firstChild.textContent = `<${el.firstChild.textContent} />`);

const undecolateTag = (el) =>
  (el.firstChild.textContent = el.firstChild.textContent.replace(/[<\/>]/gim, " "));

const active = (el) => {
  decolateTag(el);
};

const unactive = (el) => {
  undecolateTag(el);
};

const menuLength = document
  .getElementsByTagName("nav")[0]
  .getElementsByTagName("li").length;

[...Array(menuLength)].forEach((_, i) => {
  const a = document.querySelector(`#nav > ul > li:nth-child(${i + 1}) > a`);
  if (dir(window.location.href) === dir(a?.href)) {
    active(a);
  } else {
    unactive(a);
  }
});

// const a1 = document.querySelector("#nav > ul > li:nth-child(1) > a");
// let p1 = dir(a1.href);
// const a2 = document.querySelector("#nav > ul > li:nth-child(2) > a");
// let p2 = dir(a2.href);
// const a3 = document.querySelector("#nav > ul > li:nth-child(3) > a")
// let p3 = dir(a3.href);
// const a4 = document.querySelector("#nav > ul > li:nth-child(4) > a")
// let p4 = dir(a4.href);
// const a5 = document.querySelector("#nav > ul > li:nth-child(5) > a")
// let p5 = dir(a5.href);
//
// switch(dir(window.location.href)) {
//   case p1:
//     active(a1);
//     break;
//   case p2:
//     active(a2);
//     break;
//   case p3:
//     active(a3);
//     break;
//   case p4:
//     active(a4);
//     break;
//   case p5:
//     active(a5);
//     break;
// }
