document.getElementById('playerCountSlider').addEventListener('input', function() {
    var playerCount = this.value;
    document.getElementById('playerCountDisplay').textContent = 'Players: ' + playerCount;
});

// Navigation to the main game page
document.getElementById('startGameButton').addEventListener('click', function() {
    window.location.href = 'main_game1.html'; // Redirects to the main game page
});
