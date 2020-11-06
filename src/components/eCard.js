import React from 'react';
//bootstrap components
import Button from 'react-bootstrap/button';

class Ecard extends React.Component {

  render() {

    return (
        <tr>
        <td>{this.props.name}</td>
        <td>{this.props.location}</td>
        <td>{this.props.date}</td>
        <td>{this.props.detail}</td>
        <td> <Button variant ={this.props.attending ? "success" : "secondary"} onClick = {() => this.props.toggleAttend()}>{this.props.attending ? "Yes":"No"}</Button></td>
        <td><Button variant ='outline-danger' onClick = {() => this.props.remove()} >X</Button></td>
      </tr>
    )
  }
}

export default Ecard;