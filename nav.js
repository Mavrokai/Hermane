document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split('/').pop(); // Récupère le nom de la page actuelle

    if (currentPage === 'index.html') {
        document.getElementById('LinkNavHome').classList.add('active');
    } else if (currentPage === 'buy.html') {
        document.getElementById('LinkNavStore').classList.add('active');
    }
});