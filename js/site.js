/*
   Extra code to make your website responsive, pretty, and
   better. Done without jQuery hopefully!
 */

document.addEventListener("DOMContentLoaded", function(event) {
  // Enable side-scrolling tables on mobile.
  document.querySelectorAll('table').forEach(function (e) {
    var div = document.createElement('div');

    div.className += 'table-auto-wrap';
    e.insertAdjacentElement('beforebegin', div);
    div.appendChild(e);
  });
});
