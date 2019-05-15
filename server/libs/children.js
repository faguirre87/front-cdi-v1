const axios = require("axios");

class Children  {
  create(id, children) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
      .post(
          `http://localhost:5000/api/v1/children/create/${id}`,
          children,
          { headers: headers }
      )
      .then(res => res.data)
      .then(children => resolve(children))
      .catch(error => reject(error));
    });
  }

  get(id) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios.
          get(`http://localhost:5000/api/v1/children/get/${id}`, {headers: headers})
          .then(res => res.data)
          .then(children => resolve(children))
          .catch(error => reject(error))
    })
  }
}

module.exports = Children;
