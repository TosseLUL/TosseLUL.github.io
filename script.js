document.addEventListener('DOMContentLoaded', () => {
    const nationForm = document.getElementById('nation-form');
    const nationList = document.getElementById('nation-list');

    nationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nationInput = document.getElementById('nation');
        const nation = nationInput.value.trim();

        if (nation !== '') {
            addNationToList(nation);
            nationInput.value = '';
            saveNation(nation);
        }
    });

    function addNationToList(nation) {
        const li = document.createElement('li');
        li.textContent = nation;
        nationList.appendChild(li);
    }

    function saveNation(nation) {
        let nations = JSON.parse(localStorage.getItem('nations')) || [];
        nations.push(nation);
        localStorage.setItem('nations', JSON.stringify(nations));
    }

    function loadNations() {
        let nations = JSON.parse(localStorage.getItem('nations')) || [];
        nations.forEach(nation => addNationToList(nation));
    }

    loadNations();
});
