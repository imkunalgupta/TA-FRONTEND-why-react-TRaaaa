let input = document.querySelector('input[type=text]');
let rootElm = document.querySelector('.movie-list');

let allMovies = [
  {
    name: 'Mission Impossible',
    watched: false,
  },
  {
    name: 'Dangal',
    watched: true,
  },
];

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = ' ';
    createWatchlistUI();
  }
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createWatchlistUI();
}

function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
}

function createWatchlistUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, index) => {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = index;
    input.checked = movie.watched;
    input.addEventListener('change', handleChange);
    let label = document.createElement('label');
    label.for = index;
    label.innerText = movie.name;
    let span = document.createElement('span');
    span.innerText = 'X';
    span.setAttribute('data-id', index);
    span.addEventListener('click', deleteMovie);
    div.append(input, label);
    li.append(div, span);
    rootElm.append(li);
  });
}

createWatchlistUI();
