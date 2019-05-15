const axios = require("axios");

class Survey {
  postSurvey(id, survey) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
      .post(
          `http://localhost:5000/api/v1/survey/create/${id}`,
          survey,
          { headers: headers }
      )
      .then(res => res.data)
      .then(user => resolve(user))
      .catch(error => reject(error));
    });
  }

  updateSurvey(id, nameSurvey, survey) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
      .post(
          `http://localhost:5000/api/v1/survey/update/${nameSurvey}/${id}`,
          survey,
          { headers: headers }
      )
      .then(res => res.data)
      .then(user => resolve(user))
      .catch(error => reject(error));
    });

  }

  putSurvey(id, nameSurvey, survey) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios
      .put(
          `http://localhost:5000/api/v1/survey/update/${nameSurvey}/${id}`,
          survey,
          { headers: headers }
      )
      .then(res => res.data)
      .then(user => resolve(user))
      .catch(error => reject(error));
    });
  }

  getSurvey(id) {
    const headers = {
      "Content-Type": "application/json"
    };

    return new Promise((resolve, reject) => {
      axios.
          get(`http://localhost:5000/api/v1/survey/get/${id}`, {headers: headers})
          .then(res => res.data)
      .then(children => resolve(children))
      .catch(error => reject(error))
    })
  }
}

module.exports = Survey;
