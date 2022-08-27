
date = document.querySelector("#currentDay");

// SHOW DATE ON PAGE
var today = moment().format("MMMM D, YYYY")
date.textContent = today;

hour = moment().format('H')