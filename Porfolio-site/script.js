function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const main = document.querySelector('main');

  sidebar.classList.toggle('hidden');
  if (sidebar.classList.contains('hidden')) {
    toggleBtn.style.left = '20px';
    main.style.marginLeft = '20px';
  } else {
    toggleBtn.style.left = '260px';
    main.style.marginLeft = '260px';
  }
}
