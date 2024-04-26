const fetchTeamsBtn = document.getElementById('fetch-teams');

fetchTeamsBtn.addEventListener('click', async () => {
    const response = await fetch('http://127.1.1.1:3000/updatePlayerCsv')
    const players = await response.json()
    console.log(players)
})