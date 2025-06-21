async function getApiData() {
  const response = await fetch("http://localhost:3001/api/user");
  const data = await response.json();
  console.log(data);
}

document.querySelector("button").addEventListener("click", getApiData);
