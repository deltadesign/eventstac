import axios from 'axios';
const url = 'https://cors-anywhere.herokuapp.com/https://eventstac.herokuapp.com/'

export class ApiClient {

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error (response.text));
    }
  }

  request(method , url , data) {
    return axios({
      method,
      url,
      data
    })
    .then(this.status)
    .catch((error) => {
      console.log(error)
      alert(error)
    })
  }
 
  // return list of all events
  //https://eventstac.herokuapp.com/events
  getEventList() {
    return this.request('get' ,`${url}events`);
  }
  // delete event
  //https://eventstac.herokuapp.com/event/delete
  removeEvent(id){
    return this.request( 'delete' , `${url}event/${id}`); 
  }
  // add event
  //https://eventstac.herokuapp.com/event/create
  addEvent(name, location, date, detail){
    return this.request('post' , `${url}event/create`, { name, location, date, detail })
  }
  //update event 
  //https://eventstac.herokuapp.com/event/<id>
  updateEvent(){

  }
}