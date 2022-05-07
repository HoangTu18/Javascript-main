
/* === http link ===*/
async function fetchData(label = 'users'){
  const apiLink = `https://tony-json-server.herokuapp.com/api/${label}`;
  const res = await fetch(apiLink);
  const data = await res.json();
  const values = data.data;
  return values;
}

export {
  fetchData
}