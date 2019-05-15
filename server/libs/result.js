const axios = require("axios");

class Result {
  getResultPadre(id) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios.
          get(`http://localhost:5000/api/v1/resultParents/${id}`, {headers: headers})
          .then(res => res.data)
      .then(result => resolve(result))
      .catch(error => reject(error))
    })
  }

  getResult() {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios.
          get(`http://localhost:5000/api/v1/results/all`, {headers: headers})
          .then(res => res.data)
      .then(result => resolve(result))
      .catch(error => reject(error))
    })
  }
}

module.exports = Result;
