// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/products");
    const data = response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {
  let queryString = "";

  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }
  // console.log(queryString)
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:5050/products?" + queryString
    );
    const data = response.json();
    resolve({ data });
  });
}
