async function getApiData() {
  const response = await fetch("http://localhost:3001/api/taxi");
  const data = await response.json();

  const ul = document.createElement("ul");
  
  const html = data.map(item => (
    `<li id="${item.id}">
      <span>${item.name}</span>
      <span>${item.price}</span>
      <span>${item.car}</span>
      <span>${item.driver}</span>  
    </li>`
  )).join("");

  ul.innerHTML = `
  
    <h2>Taxi data</h2>
    ${html}
  `
  document.querySelector('.welcome').append(ul);
}

document.querySelector("button").addEventListener("click", getApiData);
