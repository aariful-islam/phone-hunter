// get phonr list from api
const phoneList = (data) => {
    // spiner
    toggleSpinner('block')

    // toggleSearchList('none')
    // search option
    const getSearchInputText = document.getElementById("searchInput");
    const getSearchInputValue = getSearchInputText.value;
    getSearchInputText.value = "";
    if (getSearchInputValue == "") {
        document.getElementById("phoneList").innerHTML = `<h5 class="text-center "> Please enter Phone Name...</h5>`;
    } else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${getSearchInputValue}`)
            .then((res) => res.json())
            .then((data) => ShowPhoneList(data.data));
    }
};
// show phone list
const ShowPhoneList = (phones) => {
    const listOfPhones = document.getElementById("phoneList");
    listOfPhones.classList.add("phoneCard");
    listOfPhones.textContent = "";
    // if no result found
    if (phones.length == 0) {
        listOfPhones.innerHTML = `<h3 class="text-center"> No resul found...</h3>`;
    }
    phones.slice(0, 20).forEach((phone) => {
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="card">
              <div class="text-center">
              <img  class="img-thumbnail w-50 " src="${phone.image}" class="card-img-top" alt="...">
              </div>

              
              <div class="card-body">
                <h5 class="card-title"> ${phone.phone_name}</h5>
                <h5 class="card-title"> ${phone.brand}</h5>
                
              </div>
              <div class="text-center">
              <button onclick="phoneDetails('${phone.slug}')" class="btn btn-outline-secondary bg-primary text-white mx-auto w-75" id="details" type="button">Details</button>
              </div>
            </div>
            </div>

    
    `;
        listOfPhones.appendChild(div);
    });
    toggleSpinner("none");
    //   toggleSearchList('block')
};

// show phone details

const phoneDetails = (datas) => {
    // console.log(datas)

    fetch(`https://openapi.programming-hero.com/api/phone/${datas}`)
        .then((res) => res.json())
        .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (data) => {
    // console.log(data)
    const setPhoneDetails = document.getElementById("details");
    setPhoneDetails.textContent = "";

    const div = document.createElement("div");

    //   img.innerText=${data.image}
    div.innerHTML = `
    <div class="card ps-5">
              <div class="text-center">
              <img  class="img-thumbnail w-10 h-10 mb-5" src="${data.image}" class="card-img-top" alt="...">
              </div>
              <p><span class="fs-5 text fw-bold">Release Date: </span> ${data.mainFeatures.releaseDate ? data.mainFeatures.releaseDate : 'comming soon'} </p>
              
              <div>
              <h3> Main Features: </h3>
              <ul>
              <li> <span class="fs-5 text fw-bold">Storage: </span> ${data.mainFeatures.storage}</li>
              <li><span class="fs-5 text fw-bold">Display Size: </span>  ${data.mainFeatures.displaySize}</li>
              <li><span class="fs-5 text fw-bold">ChipSet: </span> ${data.mainFeatures.chipSet}</li>
              <li><span class="fs-5 text fw-bold">Memory: </span> ${data.mainFeatures.memory}</li>
              
              </ul>
              
         
              </div>
              <p><span class="fs-5 text fw-bold">Sensors: </span> ${data.mainFeatures.sensors ? data.mainFeatures.sensors : 'comming soon'} </p>
              
       </div>

`;

    setPhoneDetails.appendChild(div);
};

// sipper
const toggleSpinner = (displayStyle) => {
    document.getElementById("spinner").style.display = displayStyle;
};
const toggleSearchList = (displayStyle) => {
    document.getElementById("phoneList").style.display = displayStyle;
};
