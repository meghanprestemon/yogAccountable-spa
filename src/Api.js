export default class Api {
  static verifyLogin (username, password) {
    return fetch('http://localhost:8000/users/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
      .then(response => response)
      .catch(e => console.error('error: ', e));
  }
}
