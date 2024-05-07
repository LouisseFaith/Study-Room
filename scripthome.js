document.addEventListener('DOMContentLoaded', function() {
    // Create an overlay div
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.addEventListener('click', function() {
        window.location.href = 'Website_FinalHome.html';
    });

    // Append the overlay to the body
    document.body.appendChild(overlay);
});