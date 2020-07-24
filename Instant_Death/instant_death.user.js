// ==UserScript==
// @name         Instant Death
// @namespace    https://github.com/Ray-Adams
// @version      0.0.1
// @description  Instantly ends the article after a single incorrect key.
// @author       Ray Adams
// @match        http://thetypingmatch.com/test
// @run-at       document-end
// @grant        none
// ==/UserScript==

window.addEventListener('keyup', () => {
    var c = document.getElementsByClassName('char current incorrect')[0];
    if (c != null) {
        alert(`Correct key: ${c.innerHTML}`);
        window.location.reload();
    }
});
