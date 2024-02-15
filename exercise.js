const btnEur = document.getElementById("btnEur");
const btnEng = document.getElementById("btnEng");
const btnMacedonia = document.getElementById("btnMacedonia");
const input = document.getElementById("input");
const btnSrc = document.getElementById("btnSrc");
const btnRst = document.getElementById("btnRst");

btnEur.addEventListener("click", () => {
    
})

const dzusiData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
    console.log(data);
}
dzusiData();

