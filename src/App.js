//https://deltadesign.github.io/eventstac/

import React from 'react';
//components
import Etable from './components/eTable';
import { ApiClient } from './ApiClient';
// bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/nav';
// import Spinner from 'react-bootstrap/spinner';
// Application CSS
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      eventList: []
    };
    this.ApiClient = new ApiClient();
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents() {
    this.ApiClient.getEventList().then((response) => {
      this.setState({
        loading: false,
        eventList: response.data
      })
    })
  }

  render() {
  return (
    <>
    {/* <pre>{JSON.stringify(this.state)}</pre> */}

    <Container className="App">
      <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">EventStac</Navbar.Brand>
      </Navbar>
      {this.state.loading ?  "Loading Events...":<Etable eventList = {this.state.eventList} />}
    </Container>

    </>
  );
}
}

export default App;
