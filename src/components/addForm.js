import React from 'react';

//Bootstrap Components
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,  
    }
  }

  submitHandler(e){
    e.preventDefault()
    this.setState({disabled:true})
    let action;
    if (this.props.event._id) {
      action = this.props.ApiClient.updateEvent(
        this.props.event._id, 
        e.target.name.value , 
        e.target.location.value , 
        e.target.date.value ,
        e.target.time.value ,
        e.target.detail.value)
    } else {
      action = this.props.ApiClient.addEvent(
        e.target.name.value, 
        e.target.location.value, 
        e.target.date.value, 
        e.target.time.value, 
        e.target.detail.value)}
        console.log(action)
    action.then(() => {
      this.setState({disabled: false})
      this.props.getEvents()
      document.getElementById("addform").reset()
    })
  }

  clearForm(){
    this.props.getEvents()
    document.getElementById("addform").reset()  
  }

  render(){
    return (
      <>
        <Form id = "addform" className="mt-2 mb-2" onSubmit = {(e) => this.submitHandler(e)}>
          {/* FIRST ROW */}
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  name="name" 
                  type = "text"
                  defaultValue = {this.props.event?.name}
                  placeholder="Event Name" 
                  // onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* SECOND ROW */}
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  name="location" 
                  defaultValue = {this.props.event?.location}
                  type = "text" 
                  placeholder="Location" 
                  // onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* THIRD ROW */}
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  name="date" 
                  defaultValue = {this.props.event?.date}
                  type = "date" 
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="time">
                <Form.Control 
                  name="time"
                  defaultValue = {this.props.event?.time}
                  type = "time" 
                  disabled = {this.state.disabled}
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* FOURTH ROW */}
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Control 
                  name="detail" 
                  defaultValue = {this.props.event?.detail} 
                  type = "text" 
                  placeholder="Description" 
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>

          <Button 
            className = 'mr-2'
            variant = "outline-success" 
            type = "submit" disabled = {this.state.disabled}>
            {this.props.event?.name ? 'Update':'Submit'}</Button>

          <Button 
            style = {{visibility: this.props.event._id? 'visible' : 'hidden'}}
            variant = "outline-danger"
            onClick = {() => this.clearForm()}
            >Cancel</Button>

        </Form>
      </>
    )
  }
}

export default Add;