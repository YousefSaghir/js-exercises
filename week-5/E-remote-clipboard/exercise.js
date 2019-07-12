/*
Task 1
=======
Use fetch to create a new clipboard.

HTTP Verb: POST
API: https://codeyourfuture.herokuapp.com/api/clipboard
Request Body: { "title": "myClipboardId", "text": "some text to put in the clipboard"}

Task 2
======
Use fetch to load the text of an existing clipboard and display it in the browser console.

HTTP Verb: GET
API: https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId
Also, for GET request, you can use the url directly in your browser address bar
*/

// Task 1: create a new clipboard
// Complete the code below

var clipboardTitle = "myClipboardId";
var clipboardText = "some text to put in the clipboard";
var requestBody = { title: clipboardTitle, text: clipboardText };

var postRequestParameters = {
  body: JSON.stringify(requestBody),
  method: "POST",
  headers: {
    "content-type": "application/json"
  }
};

fetch(
  "https://codeyourfuture.herokuapp.com/api/clipboard",
  postRequestParameters
)
  .then(responsive => {
    return responsive.text();
  })
  .then(response => console.log("Success:", JSON.stringify(response)))
  .catch(error => console.error("Error:", error));

// Task 2: Load an existing clipboard
// Add your code below

fetch("https://codeyourfuture.herokuapp.com/api/clipboard?title=myClipboardId")
  .then(function(response) {
    return response.text();
  })
  .then(response => console.log("Success:", JSON.stringify(response)))
  .catch(error => console.error("Error:", error));
