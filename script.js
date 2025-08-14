// Smooth scroll and active nav highlighting
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('show');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href && href.length > 1){
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      navList.classList.remove('show');
      navToggle?.setAttribute('aria-expanded','false');
      history.pushState(null, '', href);
    }
  });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if(storedTheme === 'light'){ document.body.classList.add('light'); }
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form demo
function handleSubmit(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  alert(`Thanks ${data.name}! This demo form doesn't send emails.\nEmail: ${data.email}\nMessage: ${data.message}`);
  e.target.reset();
}
