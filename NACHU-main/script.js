// Function to move the button
function moveButton() {
  // Subtract button width/height so it stays within the viewport
  const padding = 50;
  const newX = Math.random() * (window.innerWidth - padding * 2) + padding;
  const newY = Math.random() * (window.innerHeight - padding * 2) + padding;

  // Use fixed positioning or absolute relative to body for easier math
  noBtn.style.position = "fixed"; 
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
}

// Hover for Desktop
noBtn.addEventListener("mouseover", moveButton);

// Touch for Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // Prevents the actual "click" from happening
  moveButton();
});

// Yes button functionality remains same
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "flex"; // Changed to flex
    resultContainer.style.flexDirection = "column";
    gifResult.play();
  }, 3000);
});