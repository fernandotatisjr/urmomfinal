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