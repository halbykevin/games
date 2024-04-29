document.getElementById('beginGame').addEventListener('click', function() {
    displayRandomPair();
    this.style.display = 'none'; // Hide Begin button
    document.getElementById('nextPair').style.display = 'block';
  });
  
  document.getElementById('nextPair').addEventListener('click', function() {
    displayRandomPair();
  });
  
  function displayRandomPair() {
    const names = JSON.parse(localStorage.getItem('playerNames'));
    const shuffled = names.sort(() => 0.5 - Math.random());
    const pair = shuffled.slice(0, 2);
    document.getElementById('pairsDisplay').innerHTML = `Dare: ${pair[0]} to ${pair[1]}`;
  }
  