let launches = 0;
const btn = document.getElementById('ctaBtn');
const counter = document.getElementById('counter');
btn.addEventListener('click', () => {
  launches++;
  counter.textContent = launches + (launches === 1 ? ' launch' : ' launches');
  console.log('Launched demo #' + launches);
});