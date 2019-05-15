const axios = require("axios");

class User {
  validateEmailAndPassword(credential) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://localhost:5000/api/v1/authorize/${credential.username}/${credential.secretWord}`,
          credential,
          { headers: headers }
        )
        .then(res => res.data)
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }

  getUser(username) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
      .get(
          `http://localhost:5000/api/v1/user/${username}`,
          { headers: headers }
      )
      .then(res => res.data)
      .then(user => resolve(user))
      .catch(error => reject(error));
    });
  }

  // registerUser(user) {
  //   const headers = {
  //     "Content-Type": "application/json"
  //   };
  //
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`http://www.mocky.io/v2/5c7045b638000079003fcbfb`, user, { // TODO: {{host}}/user/create
  //         headers: headers
  //       })
  //       .then(res => res.data)
  //       .then(user => resolve(user))
  //       .catch(error => reject(error));
  //   });
  // }
}

module.exports = User;
