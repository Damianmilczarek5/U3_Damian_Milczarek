"use strict";

function darkTheme() {
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

let darkModeOn = document.querySelector('#dark-mode');
let enableDarkMode = function() {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}
let disableDarkMode = function() {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
// save the dark theme preference even when user left the site
if (darkMode === 'enabled') {
  enableDarkMode();
}
// eventlistener that when user clicks it looks at local storage if user has dark mode on or off
darkModeOn.addEventListener('click', function() {
  darkMode = localStorage.getItem('darkMode'); 
  
  // if its not enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
}

darkTheme();
