const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}

const displayPhone = phones =>{
   const phonesContainer = document.getElementById('phone-container');
   phonesContainer.textContent = '';
   //* display 10 phones only
   const showAll = document.getElementById('show-all');
   if(phones.length>10){
    showAll.classList.remove('d-none');
   }
   else{
    showAll.classList.add('d-none');
   }
//    phones = phones.slice(0, 10);
   
    //* display no phone found
    const noPhone = document.getElementById('no-found-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none');
    }
    //* display all phones
   phones.forEach(phone =>{
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML = `
    <div class="col">
    <div class="card p-4">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    `;
    phonesContainer.appendChild(phoneDiv);
   });
   //* stop spinner loader
   toggleSpinner(false);
}

//* handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    //* start loader
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
})

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


// loadPhones();