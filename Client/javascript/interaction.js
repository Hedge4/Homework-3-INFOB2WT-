const expandIcon = document.querySelector('.expand-icon');
const sidebar = document.querySelector('.sidebar');
expandIcon.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-expanded');
});