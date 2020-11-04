import React from 'react';
import Form from 'react-bootstrap/form';
import Col from 'react-bootstrap/col';

class Add extends React.Component {
  render(){
    return (
      <>
        <Form className="mt-2">
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

          <Form.Group controlId="detail">
            <Form.Control name="detail" type = "text" placeholder="Summary"/>
          </Form.Group>
          
        </Form>
      </>
    )
  }
}

export default Add;