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
const itemsPerPage = 5;
let currentPage = 1;
const shows = document.querySelectorAll('#ucs .row, #ps .row'); // Select all your show rows
const totalPages = Math.ceil(shows.length / itemsPerPage);

function showPage(page) {
    // Hide all the shows
    shows.forEach((show, index) => {
        show.style.display = 'none';
    });

    // Show only the shows for the current page
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage && i < shows.length; i++) {
        shows[i].style.display = 'block';
    }

    // Update the pagination buttons
    document.getElementById('prev-btn').disabled = (page === 1);
    document.getElementById('next-btn').disabled = (page === totalPages);
    updatePageNumbers(page);
}

function updatePageNumbers(page) {
    const pageNumbersDiv = document.getElementById('page-numbers');
    pageNumbersDiv.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.onclick = () => showPage(i);
        if (i === page) {
            pageBtn.classList.add('active');
        }
        pageNumbersDiv.appendChild(pageBtn);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Initial setup
showPage(currentPage);
