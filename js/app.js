const loadUniverse = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse(data.data.tools);
};
const displayUniverse = (universes) => {
    console.log(universes);
    
  const universesContainer = document.getElementById("universe-container");
  const showAll = document.getElementById('show-all');
    if( universes.length > 10) {
        universes = universes.slice(0, 12);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }
  universes.forEach(universe => {
    const universeDiv = document.createElement('div');
    universeDiv.classList.add('col');
    universeDiv.innerHTML = `
        
        <div class="card p-4">
            <img src="${universe.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text">1.${universe.features[0]}</p>
            <p class="card-text">2.${universe.features[1]}</p>
            <p class="card-text">3.${universe.features[2]}</p>
            


            <h5 class="card-title">${universe.name}</h5>
           
            
        </div>
    </div>
            
        `;
        universesContainer.appendChild(universeDiv)
  });
};
const processSearch = () =>{
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadUniverse(searchText);
}

document.getElementById('btn-search').addEventListener('click', function(){
   
    processSearch();
})


document.getElementById('btn-show-all').addEventListener('click', function(){
     processSearch(12);
     })





loadUniverse();
