const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

livrosJson.map((item, index) => {
  let livroItem = c('.models li').cloneNode(true);

  livroItem.querySelector('.header h2').innerHTML = item.name;
  livroItem.querySelector('p').innerHTML = item.description;

  c('.cards').append(livroItem);
})

const filterElement = c('header input');
const cards = cs('.cards li');

filterElement.addEventListener('input', filterCards)

function filterCards(){
  if(filterElement.value != ''){
    for(let card of cards){
      let title = card.querySelector('h2')
      title = title.textContent.toLowerCase()
      let filterText = filterElement.value.toLowerCase()
      if(title.includes(filterText)){
        card.style.display = "flex"
      } else{
        card.style.display = "none"
      }
    }
  } else{
    for(let card of cards){
      card.style.display = "flex"
    }
  }
}
