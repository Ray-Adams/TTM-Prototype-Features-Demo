// ==UserScript==
// @name         Quick Tab
// @namespace    https://github.com/Ray-Adams
// @version      0.0.1
// @description  Quickly refresh the page by pressing the "tab" key.
// @author       Ray Adams
// @match        http://thetypingmatch.com/test
// @run-at       document-end
// @grant        none
// ==/UserScript==

window.addEventListener('keydown', () => {
  if (event["keyCode"] == 9) {
    window.location.reload();
  }
})
