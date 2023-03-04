const loadCard = async(dataLimit)=>{
const url = ` https://openapi.programming-hero.com/api/ai/tools`;
const res = await fetch(url);
const data = await res.json();
displayCard(data.data.tools,dataLimit);
}

const displayCard = (card,dataLimit) =>{
const cardContainer = document.getElementById('hubs-container');
     cardContainer.textContent = '';
     const showAll = document.getElementById('show-all');
     card = card.slice(0,6);
     if (dataLimit && data.Length >6){
         
         showAll.classList.remove('d-none');
     }
     else {
      showAll.classList.add();
     }
     
      card.forEach(tool => {
       const linkContainer = document.createElement('div');
        linkContainer.classList.add('col');
        linkContainer.innerHTML = `
        <div class="card h-100">
        <img src="${tool.image}" class="card-img-top" alt="...">
         <div class="card-body">
          <h5 class="card-title">${tool.name}</h5>
          <p class="card-text">${tool.features}</p>
         </div>
        <div class="card-footer">
      <div>
        <small class="text-muted fw-bold">${tool.name}</small>
      </div>
        
      <div class="d-flex justify-content-between">
        <small class="text-muted">${tool.published_in}</small>
        
        <button onclick="cardDetails('${tool.id})" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#cardDetailsModal"><i class="fa-solid fa-arrow-right"></i></button>
        
  
</button>
      </div>
         </div>
       </div>
      `;
      cardContainer.appendChild(linkContainer);
      });  
    toggleSpinner(false);     
}

document.getElementById('btn-show-all').addEventListener('click',function(){
  toggleSpinner (true);
   loadCard(dataLimit);
})

const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none');
  }
  else {
    loaderSection.classList.add('d-none');
  }
}

const loadCardDetails = async id =>{
   try{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
   const res = await fetch(url);
   const data = await res.json();
   }
   catch (error){
    console.log(error)
}
  //  displayCardDetails(data.data.tools);  
  console.log(data.data);
  

  const displayCardDetails = card =>{
    const CardTitle = document.getElementById('cardDetailsModalLabel');
    CardTitle.innerText = card.name;
    const cardDetails = document.getElementById('modal-details');
    //  cardDetails.innerHTML
  }
}

loadCard();