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
