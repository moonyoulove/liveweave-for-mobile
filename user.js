// ==UserScript==
// @name         liveweave for mobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://liveweave.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".pos-split-container").css("left","0px");
    $(".pos-split-container").css("width","100%");
    $("#fullscreen-html-toggle").click();
    var t = htmlEditor.getInputField();
    var p = t.parentElement;
    p.style.cssText = "position: static;"
    t.style.cssText = "position: absolute;padding: 0px;width: 25px;height: 25px;outline: medium none currentcolor;z-index: 2147483647;top: 45px;";
    $(p).append("<div onclick=\"htmlEditor.execCommand('sA');\">s</div>");
})();
