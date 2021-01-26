window.addEventListener('load',init,false);
function init(){
  const shuffleBtn = document.getElementById('shuffle');
  const sortBtn = document.getElementById('sort');
  const cardContainer = document.querySelector('.cards-container');
  shuffleBtn.addEventListener('click',()=>appendCards(shuffleArray([...cardContainer.children]),cardContainer))
  sortBtn.addEventListener('click',()=> appendCards(sort([...cardContainer.children]),cardContainer))
}

function appendCards(cardsArray, cardContainer) {
    const elements = new DocumentFragment()
    cardsArray.map(element=> elements.appendChild(element))
    cardContainer.appendChild(elements)
}


function sort(cards){
   return cards.sort((el1,el2)=> parseInt(el1.dataset.number) - parseInt(el2.dataset.number))
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }