import React from 'react';

//components
import Ecard from './eCard';

//Bootstrap
import Table from 'react-bootstrap/table';

class Etable extends React.Component {


  createEventsList(){
    return this.props.eventList.map((event, i) => (
      <Ecard key = {i}
      id = {event._id}
      name = {event.name}
      location = {event.location}
      date = {event.date}
      detail = {event.detail}
      attending = {event.attending} />
      ))
    }

  render(){
    return (
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

        {this.createEventsList()}
          
      </Table>
    )
  }
} 

export default Etable;