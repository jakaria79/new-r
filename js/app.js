const loadUniverseHubs = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/uHubs`;
    const res = await fetch(url);
    const data = await res.json();
    
    displayUniverseHubs(data.data);
}

const displayUniverseHubs = universeHubs =>{
const universeHubsContainer = document.getElementById('hubs-container'); 
    universeHubsContainer.textContent = '';
    universeHubs.tools.forEach(tool =>{
      console.log(tool);
  //   const linkContainer = document.createElement('div');
  //   linkContainer.classList.add('col');
  //   linkContainer.innerHTML = `
  //   <div class="card h-100">
  //   <img src="${tool.image}" class="card-img-top" alt="...">
  //    <div class="card-body">
  //     <h5 class="card-title">${tool.name}</h5>
  //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //    </div>
  //   <div class="card-footer">
  //     <small class="text-muted">${tool.published_in}</small>
  //    </div>
  //  </div>
  // `;
  })
       universeHubsContainer.appendChild(linkContainer);
}

loadUniverseHubs();

