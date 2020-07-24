// ==UserScript==
// @name         Blind Mode
// @namespace    https://github.com/Ray-Adams
// @version      0.0.2
// @description  Replaces (in)correct character highlighting with the serika-dark-theme yellow, to help improve raw speed.
// @author       Ray Adams
// @match        http://thetypingmatch.com/test
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function(){
    var a = document.styleSheets[16], b = '{color:#e2b714; transition:0.3s;}';

    a.deleteRule(10);
    a.deleteRule(9);

    a.insertRule('.correct' + b, 9);
    a.insertRule('.incorrect' + b, 10);
})();
