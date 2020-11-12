import React from 'react';

//bootstrap components
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import Col from 'react-bootstrap/col';

class Login extends React.Component {

render () {
  return (

    <Form id = "loginform" className = "pb-2 pt-2">
      
      <Form.Group controlId = "username">
        <Col>
          <Form.Label>Username</Form.Label>
          <Form.Control type = "text" placeholder="please enter your username"/>
        </Col>
      </Form.Group>

      <Form.Group controlId = "password">
        <Col>
          <Form.Label>Password</Form.Label>
          <Form.Control type = "password" placeholder="please enter your username"/>
        </Col>
      </Form.Group>
      
      <Col>
        <Button variant = "outline-primary">Log In</Button>
      </Col>

    </Form>
  )
}
}

export default Login;