import React from 'react';

//components
import Ecard from './eCard';
import Add from './addForm';

//Bootstrap
import Table from 'react-bootstrap/table';

class Etable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : true,
      eventList : [],
      editEvent: []
    }
  }

  //Sets State of App.js to the event list retrived from the API
  getEvents() {
    this.props.ApiClient.getEventList()
    .then((response) => this.setState({
      loading: false,
      eventList: response.data,
      editEvent: []
    }))
    // this.forceUpdate();
  }

  // removes an event from the list
  removeEvent(id) {
    this.props.ApiClient.removeEvent(id)
    .then(() => this.getEvents()) 
  }

  // sets the event to be edited in state - which is then passed to Add for updating. 
  editEvent(id, name, location, date, detail) {
    this.setState({
      editEvent: {
      _id: id,
      name: name,
      location: location,
      date: date, 
      detail: detail}
    }) 
  }

  // toggles attending status
  toggleAttend(id) {
    this.props.ApiClient.toggleAttend(id)
    .then(() => this.getEvents()) 
  }

  //Lifecycle method - calls the required functions to start the app
  componentDidMount() {
    this.getEvents()
  }

  // creates a table of events from state
  createEventsList(){
    return this.state.eventList.map((event, i) => (
      <Ecard key = {i}
      _id = {event._id}
      name = {event.name}
      location = {event.location}
      date = {event.date}
      detail = {event.detail}
      attending = {event.attending} 
      remove = {(i) => this.removeEvent(event._id)}
      toggleAttend = {(i) => this.toggleAttend(event._id)}
      editEvent = {(i) => this.editEvent(event._id, event.name, event.location, event.date, event.detail)} />
      ))
    }

    render(){
      return (
        <>
        <h4>Helper stuff FORM</h4>
        <Add ApiClient = {this.props.ApiClient} 
             getEvents = {() => this.getEvents()}
             event = {this.state.editEvent}     
        />
        <h4>Helper stuff TABLE</h4>
        <h2>{this.state.eventList.length} events</h2>
        <pre>{JSON.stringify(this.state.editEvent)}</pre>
        <Table responsive>
          <thead>
            <tr>
              <th>Event</th>
              <th>Location</th>
              <th>Date</th>
              <th>Summary</th>
              <th>Attending</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.createEventsList()}
          </tbody>
        </Table>
        </>
      )
  }
} 

export default Etable;