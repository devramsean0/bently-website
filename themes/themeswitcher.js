function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
function addStylesheet(stylesheet) {
    var head = document.getElementsByTagName('HEAD')[0];
    var link = document.createElement('link');
    link.rel = `stylesheet`;
    link.type = 'text/css';
    link.href = `/${stylesheet}.css`;
    link.id = `themeCSS`
    head.appendChild(link);
}

function removeStylesheet() {
    const stylesheet = document.getElementById("themeCSS");
    stylesheet.parentNode.removeChild(stylesheet)
}

function initialSetTheme() {
    if (getCookie("theme") == "") {
        document.cookie = "theme=dark"
        addStylesheet("themes/dark");
        setButton("dark")
    } else {
        const theme = getCookie("theme");
        addStylesheet(`themes/${theme}`)
        setButton(theme)
    }
}

function setTheme(theme) {
    document.cookie = `theme=${theme}`
    removeStylesheet()
    addStylesheet(`themes/${theme}`)
    setButton(theme)
}

function setButton(button) {
  document.getElementById(button).style.backgroundColor = "white";
}