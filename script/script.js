document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", () => {
    const codeBlock = button.parentNode.querySelector("code");
    const codeText = codeBlock.innerText;

    navigator.clipboard
      .writeText(codeText)

      .then(() => {
        console.log("Code copied to clipboard!");
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000); // Reset button text after 2 seconds
      })

      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  });
});

//Go Up button
window.addEventListener("scroll", function () {
  var button = document.getElementById("go-up-button");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

document.getElementById("go-up-button").addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
