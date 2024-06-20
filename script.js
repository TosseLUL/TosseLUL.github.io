document.addEventListener('DOMContentLoaded', () => {
    const nations = [
        "Afghanistan", "Albania", "Argentina", "Sultanate of Aussa", "Australia", "Austria", "Belgium", 
        "Bhutan", "Bolivian Republic", "Second Brazilian Republic", "British Malaya", "British Raj", 
        "Bulgaria", "Dominion of Canada", "Chile", "China", "Colombia", "Communist China", 
        "Costa Rica", "Cuba", "Czechoslovakia", "Denmark", "Dominican Republic", "Dutch East Indies", 
        "Ecuador", "El Salvador", "Estonia", "Ethiopia", "Finland", "France", "German Reich", 
        "Kingdom of Greece", "Guangxi Clique", "Guatemala", "Haiti", "Honduras", "Kingdom of Hungary", 
        "Iceland", "Iran", "Iraq", "Ireland", "Italy", "Japan", "Latvia", "Lithuania", "Luxembourg", 
        "Manchukuo", "Mengkukuo", "Mexico", "Mongolia", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Norway", "Oman", "Panama", "Republic of Paraguay", "Peru", "Philippines", 
        "Poland", "Portugal", "Romania", "Saudi Arabia", "Shanxi", "Siam", "Sinkiang", "South Africa", 
        "Soviet Union", "Spain", "Sweden", "Switzerland", "Tannu Tuva", "Tibet", "Turkey", 
        "United Kingdom", "United States", "Uruguay", "Venezuela", "Xibei San Ma", "Yemen", 
        "Yugoslavia", "Yunnan"
    ];

    const nationList = document.getElementById('nation-list');

    function loadNations() {
        const playedNations = JSON.parse(localStorage.getItem('playedNations')) || [];
        nations.forEach(nation => {
            const li = document.createElement('li');
            li.textContent = nation;
            const button = document.createElement('button');
            button.textContent = playedNations.includes(nation) ? 'Played' : 'Not Played';
            button.classList.toggle('played', playedNations.includes(nation));
            button.addEventListener('click', () => togglePlayed(nation, button));
            li.appendChild(button);
            nationList.appendChild(li);
        });
    }

    function togglePlayed(nation, button) {
        let playedNations = JSON.parse(localStorage.getItem('playedNations')) || [];
        if (playedNations.includes(nation)) {
            playedNations = playedNations.filter(n => n !== nation);
            button.textContent = 'Not Played';
        } else {
            playedNations.push(nation);
            button.textContent = 'Played';
        }
        button.classList.toggle('played');
        localStorage.setItem('playedNations', JSON.stringify(playedNations));
    }

    loadNations();
});

