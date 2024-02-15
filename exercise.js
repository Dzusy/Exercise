const btnEur = document.getElementById("btnEur");
const btnEng = document.getElementById("btnEng");
const btnMacedonia = document.getElementById("btnMacedonia");
const input = document.getElementById("input");
const btnSrc = document.getElementById("btnSrc");
const btnRst = document.getElementById("btnRst");
const tableContainer = document.getElementById("tableContainer");

let showDataEur = [];

const countriesData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    console.log(data);
    createCard(data);
    btnEur.addEventListener("click", () => {
        euroShow(data);
        console.log(showDataEur);
        
        
    })
}
countriesData(); 

function createCard(data) {
    for (let i = 0; i < data.length; i++) {
    tableContainer.innerHTML += `
      <div class="card">
        <div class="inCard">
          <img src="${data[i].flags.png}" />
          <h2>${data[i].name.common}</h2>
        </div>
      </div>`;
  }
}
 

function euroShow(data){
    // console.log(data);
    let filterData = data.filter((country) => 
    country.currencies && country.currencies.EUR && country.currencies.EUR.name === "Euro");
    console.log(filterData);
    showDataEur.push(filterData);
    tableContainer.innerHTML = `
    <div>${showDataEur}</div>
    <img src="${showDataEur.data.flags.png}" />


    `;
};







function engShow(data){
    // console.log(data);
    let filterData = data.filter((country) => 
    country.languages && country.languages.eng && country.languages.eng.name === "English");
    console.log(filterData);
};
function macedShow(data){
    // console.log(data);
    let filterData = data.filter((country) => 
    country.languages && country.languages.mkd && country.languages.mkd.name === "Macedonian");
    console.log(filterData);
};