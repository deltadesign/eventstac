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
      editing: false
    }
  }

  changeHandler(e) {
    const newstate ={};
    newstate[e.target.name] = e.target.value;
    this.setState(newstate)
  }

  submitHandler(e){
    this.setState({disabled:true})
    e.preventDefault()
    this.props.ApiClient.addEvent(this.state.name , this.state.location , this.state.date , this.state.detail)
    .then(()=> this.props.getEvents())
    .then(() => this.setState({
      disabled: false,
      editing: false
    }))
  }

  render(){
    return (
      <>
      <pre>AddForm = {JSON.stringify(this.state)}</pre>
      <pre>Editing = {JSON.stringify(this.state.editing)}</pre>
      <pre>Editing = {JSON.stringify(this.props.event)}</pre>
      <pre>date = {String(this.props.event.date).slice(0,10)}</pre>
        <Form id = "addform" className="mt-2 mb-2" onSubmit = {(e) => this.submitHandler(e)}>
          {/* FIRST ROW */}
          <Form.Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Control 
                  name="name" type = "text"
                  defaultValue = {this.props.event?.name}
                  placeholder="Event Name" 
                  onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* SECOND ROW */}
          <Form.Row>
            <Col>
              <Form.Group controlId="location">
                <Form.Control 
                  name="location" 
                  defaultValue = {this.props.event?.location}
                  type = "text" 
                  placeholder="Location" 
                  onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* THIRD ROW */}
          <Form.Row>
            <Col>
              <Form.Group controlId="date">
                <Form.Control 
                  name="date" 
                  defaultValue = {String(this.props.event?.date).slice(0,10)}
                  type = "date" 
                  onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="time">
                <Form.Control 
                  name="time"
                  defaultValue = {this.state.time}
                  type = "time" 
                  onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  />
              </Form.Group>
            </Col>
          </Form.Row>
          {/* FOURTH ROW */}
          <Form.Row>
            <Col>
              <Form.Group controlId="detail">
                <Form.Control 
                  name="detail" 
                  defaultValue = {this.props.event?.detail} 
                  type = "text" 
                  placeholder="Summary" 
                  onChange = {(e) => this.changeHandler(e)}
                  disabled = {this.state.disabled}
                  required
                  />
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant = "outline-success" type = "submit" disabled = {this.state.disabled}>
            {this.props.event.name ? 'Update':'Submit'}
          </Button>

          {/* <Button variant = "outline-danger"  style = {{ visibility: this.props.event.name ? 'visible' : 'hidden'  }} onClick = {this.props.getEvents()}>
            cancel
          </Button> */}
          
        </Form>
      </>
    )
  }
}

export default Add;