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
    const response = await fetch("http://localhost:5050/cart?user=" + userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data });
  });
}

export function deleteItemsFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();

    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId) {
  //First get all the items of user's cart and then delete each
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId(userId);
    const items = response.data;
    console.log(items)
    for (let item of items) {
      await deleteItemsFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
