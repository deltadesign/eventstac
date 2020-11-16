import React from 'react';
//bootstrap components
import Button from 'react-bootstrap/button';

class Ecard extends React.Component {

  render() {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan', 'Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec']
    const date = new Date (Date.parse(String(this.props.date).slice(0,10)));
    const dayOfMonth = date.getDate();
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return (
        <tr>
        <td>{this.props.name}</td>
        <td>{this.props.location}</td>
        <td>{`${day} ${dayOfMonth}-${month}-${year}`} <br /> {this.props.time}</td>
        <td>{this.props.detail}</td>
        <td> <Button style={{width: '3em'}} variant ={this.props.attending ? "success" : "secondary"} onClick = {() => this.props.toggleAttend()}>{this.props.attending ? "Yes":"No"}</Button></td>
        <td>
            <Button variant ='outline-danger' onClick = {() => this.props.remove()}>X</Button>
            <Button variant = 'outline-info' className ='ml-2' onClick = {() => this.props.editEvent()}>Edit</Button>
        </td>
      </tr>
    )
  }
}

export default Ecard;