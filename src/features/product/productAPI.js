// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/products");
    const data = response.json();
    resolve({ data });
  });
}
