// ==UserScript==
// @name         Autofix Errors
// @namespace    https://github.com/Ray-Adams
// @version      0.0.2
// @description  Automatically corrects errors to proceed to the next character.
// @author       Ray Adams
// @match        http://thetypingmatch.com/test
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function(){
    window.addEventListener('keyup', () => {
        var c = document.getElementsByClassName('char current incorrect')[0];
        if (c != null) {
            document.dispatchEvent(
                 new KeyboardEvent("keydown", {
                      key: c.innerHTML,
                      keyCode: c.innerHTML.toUpperCase().charCodeAt(0)
                 })
            );
        }
    });
})();
