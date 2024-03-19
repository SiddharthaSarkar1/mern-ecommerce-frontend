export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/orders/user/"+userId);
    const data = response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/users/own");
    const data = response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  // console.log(userData)
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}