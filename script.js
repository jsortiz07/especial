const envelope = document.querySelector('.envelope');
const openLetterBtn = document.getElementById('openLetterBtn');

openLetterBtn.addEventListener('click', () => {
    envelope.classList.toggle('open');
});
