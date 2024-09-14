const bbtn = document.querySelector('#past a');
const upcoming = document.getElementById('ucs');
const past = document.getElementById('ps');
const head = document.getElementById('headerC');

// Toggle between upcoming and past shows
bbtn.addEventListener('click', function () {
    past.classList.toggle('show');
    if (past.classList.contains('show')) {
        upcoming.classList.remove('show');
        upcoming.style.display = 'none';
        past.style.display = 'flex';
        head.innerHTML = 'Past Shows';
        bbtn.innerHTML = 'Upcoming Shows';
        currentPage = 1; // Reset to first page
        setupPagination('#ps'); // Setup pagination for past shows
    } else {
        upcoming.classList.add('show');
        upcoming.style.display = 'flex';
        past.style.display = 'none';
        head.innerHTML = 'Upcoming Shows';
        bbtn.innerHTML = 'Past Shows';
        currentPage = 1; // Reset to first page
        setupPagination('#ucs'); // Setup pagination for upcoming shows
    }
});

// Global variables for pagination
const itemsPerPage = 5;
let currentPage = 1;

// Function to show a specific page for a given container
function showPage(container, page) {
    const shows = document.querySelectorAll(`${container} .row`);
    const totalPages = Math.ceil(shows.length / itemsPerPage);

    // Hide all the shows
    shows.forEach((show) => {
        show.style.display = 'none';
    });

    // Show only the shows for the current page
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage && i < shows.length; i++) {
        shows[i].style.display = 'block';
    }

    // Update the pagination buttons
    document.getElementById('prev-btn').disabled = (page === 1);
    document.getElementById('next-btn').disabled = (page === totalPages);
    updatePageNumbers(container, page, totalPages);
}

// Function to update the page numbers
function updatePageNumbers(container, page, totalPages) {
    const pageNumbersDiv = document.getElementById('page-numbers');
    pageNumbersDiv.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.onclick = () => showPage(container, i);
        if (i === page) {
            pageBtn.classList.add('active');
        }
        pageNumbersDiv.appendChild(pageBtn);
    }
}

// Setup pagination for the given container (either #ucs or #ps)
function setupPagination(container) {
    const shows = document.querySelectorAll(`${container} .row`);
    const totalPages = Math.ceil(shows.length / itemsPerPage);

    // If there are fewer items than the itemsPerPage, ensure that only the correct amount shows up
    if (shows.length > 0) {
        showPage(container, currentPage); // Show the first page initially
    } else {
        document.getElementById('page-numbers').innerHTML = ''; // Remove pagination buttons if no shows exist
    }
}

// Navigate to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        if (past.classList.contains('show')) {
            showPage('#ps', currentPage);
        } else {
            showPage('#ucs', currentPage);
        }
    }
}

// Navigate to the next page
function nextPage() {
    const shows = past.classList.contains('show')
        ? document.querySelectorAll('#ps .row')
        : document.querySelectorAll('#ucs .row');
    const totalPages = Math.ceil(shows.length / itemsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        if (past.classList.contains('show')) {
            showPage('#ps', currentPage);
        } else {
            showPage('#ucs', currentPage);
        }
    }
}

// Initial setup for upcoming shows
setupPagination('#ucs');
