document.getElementById("startButton").addEventListener("click", function () {
  window.location.href = "setup_game1.html"; // Redirects to the game settings page
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "../gamesCollection.html"; // Goes up one directory level to /games
  });
});
