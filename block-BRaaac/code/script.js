let input = document.querySelector('input[type="text"]');
let rootElm = document.querySelector('.movies-list');

let allMovies = [
  {
    name: 'Mission Impossible',
    watched: 'To Watch',
  },
  {
    name: 'Transformer',
    watched: 'Watched',
  },
];

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: 'To Watch',
    });
    event.target.value = '';
    createWatchlistUI();
  }
});

function changeWatch(event) {
  let id = event.target.dataset.id;
  if (allMovies[id].watched === 'To Watch') {
    allMovies[id].watched = 'Watched';
  } else {
    allMovies[id].watched = 'To Watch';
  }
  createWatchlistUI();
}

function elm(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '').toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createWatchlistUI() {
  rootElm.innerHTML = '';
  allMovies.forEach((movie, i) => {
    let li = elm(
      'li',
      {},
      elm('p', { for: i }, movie.name),
      (span = elm(
        'span',
        {
          'data-id': i,
          onClick: changeWatch,
        },
        movie.watched
      ))
    );
    rootElm.append(li);
  });
}

createWatchlistUI();
