function generatePlayerInputs() {
    const playerCount = document.getElementById('playerCount').value;
    const container = document.getElementById('playerNamesContainer');
    container.innerHTML = ''; // Clear previous inputs if any
    for (let i = 1; i <= playerCount; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Player ' + i + ' Name';
      input.required = true;
      input.classList.add('player-name');
      container.appendChild(input);
    }
    document.getElementById('startGame').style.display = 'block';
  }
  
  document.getElementById('startGame').addEventListener('click', function() {
    const names = Array.from(document.querySelectorAll('.player-name')).map(input => input.value);
    localStorage.setItem('playerNames', JSON.stringify(names)); // Store names in local storage
    window.location.href = 'main_game2.html'; // Redirect to main game page
  });
  