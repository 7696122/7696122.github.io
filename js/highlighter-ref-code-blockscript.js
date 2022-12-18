// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&amp;dn=gpl-3.0.txt GPL-v3-or-Later
function CodeHighlightOn(elem, id) {
  var target = document.getElementById(id);
  if (null != target) {
    elem.classList.add("code-highlighted");
    target.classList.add("code-highlighted");
  }
}
function CodeHighlightOff(elem, id) {
  var target = document.getElementById(id);
  if (null != target) {
    elem.classList.remove("code-highlighted");
    target.classList.remove("code-highlighted");
  }
}
// @license-end
