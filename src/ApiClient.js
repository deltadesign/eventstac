import axios from 'axios';

export class ApiClient {

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error (response.text));
    }
  }

  getEventList() {
    return this.getRequest("https://cors-anywhere.herokuapp.com/https://eventstac.herokuapp.com/events");
  }

  getRequest(url) {
    return axios
    .get(url)
    .then(this.status)
    .catch((error) => {
      console.log(error)
      alert(error)
    })
  }

}