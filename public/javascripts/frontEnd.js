const fetchTeamsBtn = document.getElementById('fetch-teams');
const ul = document.querySelector('ul')


fetchTeamsBtn.addEventListener('click', async () => {
    const response = await fetch('http://127.1.1.1:3000/updatePlayerCsv')
    const players = await response.json()
    console.log(players)
    renderPlayerCards(players)
})

const renderPlayerCards = (players) => {
    players.forEach(player => {
        const playerId = player.playername.replaceAll(' ','')
        const li = document.createElement('li')
        li.textContent = `${player.playername}`
        li.id = `${playerId}`
        ul.appendChild(li)

    });
}