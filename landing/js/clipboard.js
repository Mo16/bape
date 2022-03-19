/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */


function clickToCopyText(contentToCopy) {
  // get text within the element specified by id
  var textContent = document.getElementById(contentToCopy).innerText;
  // write to clipboard
  navigator.clipboard.writeText(textContent);
  alert("Contract Copied!")
  var copy_text  = document.getElementById("copybutton").innerHTML = "Copied!"

}

// function copyToClipboard(elementId) {


//   var aux = document.createElement("input");

//   // Get the text from the element passed into the input
//   aux.setAttribute("value", document.getElementById(elementId).innerHTML);

//   // Append the aux input to the body
//   document.body.appendChild(aux);

//   // Highlight the content
//   aux.select();

//   // Execute the copy command
//   document.execCommand("copy");

//   // Remove the input from the body
//   document.body.removeChild(aux);

// }