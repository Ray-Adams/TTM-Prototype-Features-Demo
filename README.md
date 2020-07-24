# TTM Prototype Features Demo
A collection of demo features for TheTypingMatch.com prototype.

## Features
Most demo features are compatible with each other, so you can use multiple at the same time.

### Blind Mode
Replaces (in)correct character highlighting with the serika-dark-theme yellow, to help improve raw speed.

#### Bookmarklet:
```javascript
javascript:(()=>{var a=document.styleSheets[16],b="{color:#e2b714; transition:0.3s;}";a.deleteRule(10),a.deleteRule(9),a.insertRule(".correct"+b,9),a.insertRule(".incorrect"+b,10)})()
```

#### Userscript:
[blind_mode.user.js](https://github.com/Ray-Adams/TTM-Prototype-Features-Demo/raw/master/Blind_Mode/blind_mode.user.js)

### Autofix Errors
Automatically corrects errors to proceed to the next character.

#### Bookmarklet:
```javascript
javascript:window.addEventListener("keyup",()=>{var e=document.getElementsByClassName("char current incorrect")[0];null!=e&&document.dispatchEvent(new KeyboardEvent("keydown",{key:e.innerHTML,keyCode:e.innerHTML.toUpperCase().charCodeAt(0)}))});
```

#### Userscript:
[autofix_errors.user.js](https://github.com/Ray-Adams/TTM-Prototype-Features-Demo/raw/master/Autofix_Errors/autofix_errors.user.js)

### Instant Death
Instantly ends the article after a single incorrect key.

#### Bookmarklet:
```javascript
javascript:window.addEventListener("keyup",()=>{var e=document.getElementsByClassName("char current incorrect")[0];null!=e&&(alert(`Correct key: ${e.innerHTML}`),window.location.reload())});
```

#### Userscript:
[instant_death.user.js](https://github.com/Ray-Adams/TTM-Prototype-Features-Demo/raw/master/Instant_Death/instant_death.user.js)

### Quick Tab
Quickly refresh the page by pressing the "tab" key.

#### Bookmarklet:
```javascript
javascript:window.addEventListener("keydown",()=>{9==event.keyCode&&window.location.reload()});
```

#### Userscript:
[quick_tab.user.js](https://github.com/Ray-Adams/TTM-Prototype-Features-Demo/raw/master/Quick_Tab/quick_tab.user.js)

## Installation
There are two different ways you can install any of the demo features above:
1. As a bookmarklet (simple and easy; short-term usage)
2. As a userscript  (slightly more complicated if you don't already have Tampermonkey; long-term usage)

### Bookmarklet
Copy and paste the code from one of the code blocks above into the URL section of a new bookmark.

### Userscript
1. Download the Tampermonkey extension from https://www.tampermonkey.net/ (if you haven't already)
2. Install one of the userscripts above by clicking on a demo feature's respective link (e.g. `script_name.user.js`)

## Usage
1. Go to TheTypingMatch's typing prototype at: http://thetypingmatch.com/test
2. If you installed a bookmarklet, make sure to click the bookmarklet *prior* to typing an article, otherwise, if you installed a userscript, it will automatically be enabled on that page.

## Compatibility
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
