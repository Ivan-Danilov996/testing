import luhnNumber from './lunhNumber';
import checkCard from './checkCard';

const form = document.querySelector('.form');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const happy = document.querySelector('.happy');
const cards = Array.from(document.querySelectorAll('.card'));

function removeDisabled() {
  cards.forEach((card) => {
    card.classList.remove('disabled');
  });
}

function showCard(result) {
  cards.forEach((card) => {
    if (!card.classList.contains(result)) {
      card.classList.add('disabled');
    }
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (luhnNumber(input.value)) {
    happy.classList.add('active');
  } else {
    error.classList.add('active');
  }
});

input.addEventListener('input', () => {
  happy.classList.remove('active');
  error.classList.remove('active');
  const result = checkCard(input.value);
  if (result) {
    showCard(result);
  } else {
    removeDisabled();
  }
});
