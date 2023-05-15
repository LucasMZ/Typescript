interface Moeda{
    name: string,
    high: number,
}
async function FetchMoeda() {
    const response = await fetch("https://economia.awesomeapi.com.br/json/USD-BRL");
     const data = await response.json();
    showMoeda(data[0])
  }
FetchMoeda();

  function showMoeda(data: Moeda){
    document.body.innerHTML = `
            <h2>${data.name} </h2>
            <h2>${data.high} </h2>
    `
  }
console.log(FetchMoeda);