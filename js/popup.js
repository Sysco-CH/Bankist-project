"use strict";

function closePopup() {
  document.getElementById("instructionPopup").style.display = "none";
}

function showPopup() {
  document.getElementById("instructionPopup").style.display = "flex";
}

// Optionally, open the popup automatically when the page loads
window.onload = showPopup;
