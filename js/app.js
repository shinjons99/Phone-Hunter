const loadPhone = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}

const displayPhone = phones =>{
   const phonesContainer = document.getElementById('phone-container');
   phones.forEach(phone =>{
    
   })
}

loadPhone();