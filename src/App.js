//https://deltadesign.github.io/eventstac/

import React from 'react';

//components
import Etable from './components/eTable';
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

        <Navbar variant="dark" expand="sm" className="navbar">
          <Navbar.Brand>EventStagram</Navbar.Brand>
        </Navbar>

        <Etable ApiClient = {this.ApiClient}/>

      </Container>
    </>
  );
}
}

export default App;
