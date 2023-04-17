// opens/closes the navigation sidebar
const expandIcon = document.querySelector('.expand-icon');
const sidebar = document.querySelector('.sidebar');

expandIcon.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    expandIcon.classList.toggle('expanded');
});

