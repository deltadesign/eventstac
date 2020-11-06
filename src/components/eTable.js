import React from 'react';

//components
import Ecard from './eCard';

//Bootstrap
import Table from 'react-bootstrap/table';

class Etable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : true,
      eventList : []
    }
  }

  //Lifecycle method - calls the required functions to start the app
  componentDidMount() {
    this.getEvents()
  }

  //Sets State of App.js to the event list retrived from the API
  getEvents() {
    this.props.ApiClient.getEventList()
    .then((response) => this.setState({
      loading: false,
      eventList: response.data}
    ))
    console.log(this.state.eventList.length)
  }

  // removes an event from the list
  remove(id){
    this.props.ApiClient.removeEvent(id)
    .then(this.getEvents())
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
      remove = {(i) => this.remove(event._id)} />
      ))
    }

    render(){
      return (
        <>
        <Table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Location</th>
              <th>Date</th>
              <th>Summary</th>
              <th>Attending</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.createEventsList()}
          </tbody>
        </Table>
        <pre>{JSON.stringify(this.state)}</pre>
        </>
      )
  }
} 

export default Etable;