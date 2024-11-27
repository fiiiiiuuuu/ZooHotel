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
