document.querySelectorAll('.dropdown').forEach((dropdown) => {
    dropdown.addEventListener('mouseover', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'block';
    });
    dropdown.addEventListener('mouseout', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) menu.style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
    var toTop = document.getElementById('to-top');

    if (this.pageYOffset > 200) {
        toTop.style.display = 'inline-block';
    } else {
        toTop.style.display = 'none';
    }
});

document.getElementById('to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
