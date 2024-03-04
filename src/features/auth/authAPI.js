// A mock function to mimic making an async request for data
export function createUser(userData) {
  console.log(userData)
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:5050/users", {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {'content-type': 'application/json'}
    });
    const data = response.json();
    //TODO: on server it will only return some information of user (not password)
    resolve({ data });
  });
}
