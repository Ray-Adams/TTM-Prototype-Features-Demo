// ==UserScript==
// @name         Blind Mode
// @namespace    https://github.com/Ray-Adams
// @version      0.0.3
// @description  Replaces correct and incorrect character highlighting with the serika-dark-theme yellow.
// @author       Ray Adams
// @match        http://thetypingmatch.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(() => {
    let sheet = document.styleSheets[8];

    sheet.deleteRule(13);
    sheet.deleteRule(12);

    sheet.insertRule('.correct {color:#e2b714 !important; transition:0.3s;}', 12);
    sheet.insertRule('.incorrect {color:#e2b714 !important; transition:0.3s;}', 13);
})();
