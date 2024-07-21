/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
// Step 1: Locate the "Like" button
const articleHearts = document.querySelectorAll(".like");

// Step 2: Set up mock server communication
function mimicServerCall(url = "http://fake-reddit-url.com") {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Success!");
    }, 300);
  });
}

// Step 3: Add event listener to "Like" buttons
articleHearts.forEach(heart => {
  heart.addEventListener("click", function(event) {
    mimicServerCall()
      .then(function() {
        heart.innerText = heart.innerText === "♡" ? "❤️" : "♡";
      })
      .catch(function(error) {
        alert("There was an error liking the article. Please try again.");
      });
  });
});
