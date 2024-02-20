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
    // euroShow(data);
    
    let filterData = data.filter(
      (country) =>
        country.currencies &&
        country.currencies.EUR &&
        country.currencies.EUR.name === "Euro"
    );
    createCard(filterData);
    console.log(filterData);
    // showDataEur.push(filterData);
  });
  btnEng.addEventListener("click", () => {
    engShow(data);
    
  });
  btnMacedonia.addEventListener("click", () => {
    macedShow(data);
  });
  
  btnSrc.addEventListener("click", () => {
    let searchValue = input.value.trim().toLowerCase();
    if (searchValue !== "") {
      let filteredData = data.filter(country =>
        country.name.common.toLowerCase().includes(searchValue)
      );
      if (filteredData.length > 0) {
        createCard(filteredData);
      } else {
        tableContainer.innerHTML = "<p>Country not found</p>";
      }
    }
  });

//   btnSrc.addEventListener("click", () => {
//     let searchValue = input.value.trim().toLowerCase();
//     if (searchValue !== "") {
//       let foundCountry = data.find(country =>
//         country.name.common.toLowerCase() === searchValue
//       );
      
//       createCard(foundCountry || { name: { common: "Country not found" } });
//     }
// });

  // btnSrc.addEventListener("click", () => {
  //   let searchValue = input.value.trim().toLowerCase();
  //   if (searchValue !== "") {
  //     let foundCountry = data.find(country =>
  //       country.name.common.toLowerCase() === searchValue
  //     );
  //     if (foundCountry) {
  //       createCard(foundCountry);
  //     } else {
  //       tableContainer.innerHTML = "<p>Country not found</p>";
  //     }
  //   }
  // });
btnRst.addEventListener("click", () => {
  clearResult(); 
});

};
countriesData();

function createCard(data) {
  tableContainer.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const inCard = document.createElement("div");
    inCard.className = "inCard";

    inCard.innerHTML = `
          <img id="flag" src="${data[i].flags.png}" />
          <h2>${data[i].name.common}</h2>
          <p>${data[i].name.common} is a country with a population of ${data[i].population} and capital of ${data[i].capital}</p>
          <br><hr>
          <p>Open on <a href="https://en.wikipedia.org/wiki/${data[i].name.common}">Wikipedia</a></p>
        `;

    card.appendChild(inCard);
    tableContainer.appendChild(card);
  }

  //     for (let i = 0; i < data.length; i++) {
  //     tableContainer.innerHTML += `
  //       <div id="card" class="card">
  //         <div class="inCard">
  //           <img src="${data[i].flags.png}" />
  //           <h2>${data[i].name.common}</h2>
  //           <p>${data[i].name.common} is coutry with population of ${data[i].population} and capital of ${data[i].capital}</p>
  //           <br><hr>
  //           <p>Open on <a href="https://en.wikipedia.org/wiki/${data[i].name.common}">Wikipedia</a></p>
  //         </div>
  //       </div>`;
  //   }
}

// function euroShow(data){
//     // console.log(data);
//     let filterData = data.filter((country) =>
//     country.currencies && country.currencies.EUR && country.currencies.EUR.name === "Euro");
//     console.log(filterData);
//     showDataEur.push(filterData);
//     tableContainer.innerHTML = `
//     <div>${showDataEur}</div>
//     <img src="${showDataEur.data.flags.png}" />

//     `;
// };

function engShow(data) {
  // console.log(data);
  tableContainer.innerHTML = "";
  let filterData = data.filter(
    (country) =>
      country.languages &&
      country.languages.eng
  );
  console.log(filterData);
  createCard(filterData);
  
  // let filterData = data.filter(
  //   (country) =>
  //     country.languages ||
  //     country.languages.eng ||
  //     country.languages.eng.name === "English"
  // );
  // console.log(filterData);
}
function macedShow(data) {
  tableContainer.innerHTML = "";
  // console.log(data);
  let filterData = data.filter(
    (country) =>
      country.languages &&
      country.languages.mkd 
  );
  console.log(filterData);
  createCard(filterData);
}

function clearResult() {
  tableContainer.innerHTML = "";
};
