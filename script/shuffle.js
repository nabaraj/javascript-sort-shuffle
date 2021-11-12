let gridArr = [
  { value: 1, color: '#6f98a8' },
  { value: 2, color: '#2b8ead' },
  { value: 3, color: '#2f454e' },
  { value: 4, color: '#2b8ead' },
  { value: 5, color: '#2f454e' },
  { value: 6, color: '#bfbfbf' },
  { value: 7, color: '#bfbfbf' },
  { value: 8, color: '#6f98a8' },
  { value: 9, color: '#2f454e' },
];

//function to shuffle gridArr and render inside .cardContainer in html
function shuffle() {
  let shuffledArr = [];
  let randomIndex;
  while (gridArr.length > 0) {
    randomIndex = Math.floor(Math.random() * gridArr.length);
    shuffledArr.push(gridArr[randomIndex]);
    gridArr.splice(randomIndex, 1);
  }
  gridArr = shuffledArr;
  render();
}

//function to sort the gridArr
function sort() {
  gridArr.sort((a, b) => a.value - b.value);
  render();
}

// render function to render all the cards inside .cardContainer
function render() {
  let html = '';
  for (let i = 0; i < gridArr.length; i++) {
    html += `<div class="box text-center d-flex" data-value="${gridArr[i].value}" style="background-color: ${gridArr[i].color}"><span>${gridArr[i].value}</span></div>`;
  }
  document.querySelector('.gridContent').innerHTML = html;
}

shuffle();
