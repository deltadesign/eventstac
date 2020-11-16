//https://deltadesign.github.io/eventstac/

import React from 'react';

//components
import Etable from './components/eTable';
import Login from './components/login';
import { ApiClient } from './ApiClient';

// bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// Application CSS
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.ApiClient = new ApiClient();
  }

  render() {
  return (
    <>
      <Container className="App">

        <Navbar variant="dark" expand="sm" className=" mt-2 navbar">
          <Navbar.Brand>EventStagram</Navbar.Brand>
        </Navbar>

        <Login />

        <Etable ApiClient = {this.ApiClient}/>

      </Container>
    </>
  );
}
}

export default App;
