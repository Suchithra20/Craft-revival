// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 1px 20px rgba(28,26,46,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Mobile hamburger (simple toggle for north star prototype)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'var(--cotton)';
  navLinks.style.padding = '1.5rem 2rem';
  navLinks.style.borderBottom = '0.5px solid var(--cotton-dark)';
  navLinks.style.gap = '1.25rem';
  if (open) navLinks.style.display = 'none';
});

// Email signup (north star - just a friendly message)
const signupBtn = document.querySelector('.signup .btn-primary');
const signupInput = document.querySelector('.signup-input');
signupBtn?.addEventListener('click', () => {
  if (signupInput.value && signupInput.value.includes('@')) {
    signupInput.value = '';
    signupInput.placeholder = '✓ You\'re on the list. Thank you.';
    signupBtn.textContent = 'Done';
    signupBtn.style.background = '#2D4B8E';
  } else {
    signupInput.style.borderColor = 'rgba(245,239,228,0.8)';
    signupInput.focus();
  }
});

// Waitlist button
document.querySelectorAll('a[href="#"]').forEach(link => {
  if (link.textContent.includes('waitlist') || link.textContent.includes('interest')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.signup')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
