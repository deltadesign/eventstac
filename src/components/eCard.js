import React from 'react';

class Ecard extends React.Component {
  render() {
    return (
    <tr>
      <td>{this.props.name}</td>
      <td>{this.props.location}</td>
      <td>{this.props.date}</td>
      <td>{this.props.detail}</td>
      <td>{this.props.attending ? <p>Yes</p>:<p>No</p>}</td>
    </tr>
    )
  }
}

export default Ecard;