import React from 'react';
//bootstrap components
import Button from 'react-bootstrap/button';

class Ecard extends React.Component {

  render() {

    return (
        <tr>
        <td>{this.props.name}</td>
        <td>{this.props.location}</td>
        <td>{String(this.props.date).slice(0,10)}</td>
        <td>{this.props.detail}</td>
        <td> <Button style={{width: '3em'}} variant ={this.props.attending ? "success" : "secondary"} onClick = {() => this.props.toggleAttend()}>{this.props.attending ? "Yes":"No"}</Button></td>
        <td>
            <Button variant ='outline-danger' onClick = {() => this.props.remove()} >X</Button>
            <Button variant = 'outline-info' className ='ml-2' onClick = {() => this.props.editEvent()}>Edit</Button>
        </td>
      </tr>
    )
  }
}

export default Ecard;