/* This function appends a new variable to an unordered list using jQuery */

// Select the ul element with id "goalList"
var goalListUl = $("#goalList");

// Create a new Li element and store it in a variable.
var newLiEl = $("<li>");

// Create a new Div element and store it in a variable.
var newDivEl = $("<div>");

// Create a text node and store it in a variable.
var newText = "Bring our music to events and people across New England and beyond.";

// Attach the new text node to the new div element.
newDivEl.text(newText);

// Attach the div element to the new li element.
newLiEl.append(newDivEl);

goalListUl.prepend(newLiEl);
