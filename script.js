document.querySelector('.title').addEventListener('click', () => {
  const content = document.querySelector('.content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});
