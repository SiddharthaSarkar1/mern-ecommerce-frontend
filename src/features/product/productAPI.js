// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/products");
    const data = response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort, pagination) {

  //filter = {"category": ["smartphone", "laptops"]};
  //sort = {_sort: "price", _order: "desc"}
  //http://localhost:5050/products?_sort=price&_order=desc
  //Pagination = {_page: 1, _limit=10}
  //http://localhost:5050/products?_page=1&_limit=10
  //TODO: on server we will support multi values
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if(categoryValues.length > 0){
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }

  console.log(queryString)
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:5050/products?" + queryString
    );
    const data = response.json();
    resolve({ data });
  });
}
