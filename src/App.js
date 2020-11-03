import React from 'react';
import { ApiClient } from './ApiClient';

//components
import Etable from './components/eTable';

// bootstrap Components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/spinner';

// CSS
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

    <pre>{JSON.stringify(this.state)}</pre>
    
    <Container className="App">
     {this.state.loading ?  <Spinner animation="border" />:<Etable eventList = {this.state.eventList} />}
    </Container>

    </>
  );
}
}

export default App;
