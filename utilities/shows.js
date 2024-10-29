const bbtn = document.querySelector('#past a');
const upcoming = document.getElementById('ucs');
const past = document.getElementById('ps');
const head = document.getElementById('headerC');
bbtn.addEventListener('click', function () {
    past.classList.toggle('show');
    if (past.classList.contains('show')) {
        upcoming.classList.remove('show');
        upcoming.style.display = 'none';
        past.style.display = 'flex';
        head.innerHTML = 'Past Shows'
        bbtn.innerHTML = 'Upcoming Shows';
    } else {
        upcoming.classList.add('show');
        upcoming.style.display = 'flex';
        past.style.display = 'none';
        head.innerHTML = 'Upcoming Shows'
        bbtn.innerHTML = 'Past Shows';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const upcomingShowsContainer = document.getElementById('ucs');
    const pastShowsContainer = document.getElementById('ps');
    function parseDate(dateString) {
        const formattedDate = dateString.replace(/(\w+ \d+)( - \d{1,2}:\d{2}\w{2})?/, '$1, ' + new Date().getFullYear());
        return new Date(Date.parse(formattedDate));
    }
    Array.from(upcomingShowsContainer.children).forEach(show => {
        const dateElement = show.querySelector('.date');
        const showDate = parseDate(dateElement.textContent.trim());

        if (showDate < new Date()) {
            pastShowsContainer.appendChild(show);
        }
    });
});
