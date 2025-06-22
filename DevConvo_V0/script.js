document.addEventListener('DOMContentLoaded', function() {
  const comingSoon = document.querySelector('.coming-soon');
  if (comingSoon) {
    comingSoon.textContent = 'Conversations start here...';
  }
  // Launch timeline transition
  const timeline = document.querySelector('.launch-timeline');
  if (timeline) {
    setTimeout(() => {
      timeline.classList.add('visible');
    }, 1200);
  }
}); 