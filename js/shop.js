const phoneList = (data) => {
    const getSearchInputText = document.getElementById('searchInput')
    const getSearchInputValue = getSearchInputText.value;
    getSearchInputText.value = '';
    fetch(`https://openapi.programming-hero.com/api/phones?search=${getSearchInputValue}`)
        .then(res => res.json())
        .then(data => ShowPhoneList(data.data))
}
const ShowPhoneList = (phones) => {

    

    const listOfPhones = document.getElementById('phoneList')
    listOfPhones.classList.add('phoneCard')
    listOfPhones.textContent='';
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.innerHTML = `
    <div class="card">
              <div class="text-center">
              <img  class="img-thumbnail w-50 p" src="${phone.image}" class="card-img-top" alt="...">
              </div>

              
              <div class="card-body">
                <h5 class="card-title"> ${phone.phone_name}</h5>
                <h5 class="card-title"> ${phone.brand}</h5>
                
              </div>
              <div class="text-center">
              <button onclick=" " class="btn btn-outline-secondary bg-primary text-white" type="button" id="">Details</button>
              </div>
            </div>

    
    `
        listOfPhones.appendChild(div)

    })










}