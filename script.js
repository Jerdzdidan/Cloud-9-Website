window.addEventListener('beforeunload', function() {
    var container = document.getElementById('mycontainer');
    container.classList.remove('fade-in');
    container.classList.add('fade-out');
});

window.addEventListener('load', function() {
    var container = document.getElementById('mycontainer');
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
});

