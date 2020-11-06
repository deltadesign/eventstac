import React from 'react';

//Bootstrap Components
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:"",
      location:"",
      date:"",
      detail:""
    }
  }

  changeHandler(e) {
    const newstate ={};
    newstate[e.target.name] = e.target.value;
    this.setState(newstate)
  }

  submitHandler(e){
    e.preventDefault()
    console.log(e)
  }

  render(){
    return (
      <>
        <Form className="mt-2 mb-2" onSubmit = {(e) => this.submitHandler(e)}>
          <Form.Row>
            <Col>
              <Form.Group controlId="name">
                <Form.Control name="name" type = "text" placeholder="Event Name"/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="location">
                <Form.Control name="location" type = "text" placeholder="Location"/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="date">
                <Form.Control name="date" type = "date"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="date">
                <Form.Control name="date" type = "time"/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="detail">
                <Form.Control name="detail" type = "text" placeholder="Summary"/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Button variant = "outline-success" type = "submit">Submit</Button>
          
        </Form>
      </>
    )
  }
}

export default Add;