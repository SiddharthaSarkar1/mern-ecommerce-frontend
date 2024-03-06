export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/cart?user="+userId);
    const data = await response.json();
    resolve({ data });
  });
}
