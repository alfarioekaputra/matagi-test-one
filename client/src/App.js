import React, { Component } from 'react';
import './App.css';
import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.socket = io('localhost:8080');

    this.socket.on('RECEIVE_MESSAGE', function(data){
      console.log(data);
      addMessage(data);
    });

    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  renderMessages() {
    console.log(this.state.messages);
    const { messages } = this.state;
    if (messages.length > 0) {
      return messages.map(message => {
        return (
          <p>{message}</p>
        );
      });
    }
    return (
      <p>Silahkan memulai program</p>
    );
  }

  handleSubmit(event) {
    const url = 'https://newsapi.org/v2/everything?q=pariwisata indonesia&apiKey=be060bcb81814c4d89d8db3c67142271'; // Get 10 random users
    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            input: '',
            messages: [
              ...this.state.messages,
              responseJson.articles.title,
            ]
          });
        })
        .catch((error) => {
          console.error(error);
        });
    /*const url = 'https://newsapi.org/v2/everything?q=pariwisata indonesia&apiKey=be060bcb81814c4d89d8db3c67142271'; // Get 10 random users
    fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function(response) {
    console.log(response);
    // Your code for handling the data you get from the API
    this.setState({
      input: '',
      messages: [
        ...this.state.messages,
        response,
      ]
    });
})
.catch(function() {
    // This is where you run code if the server returns any errors
    console.log('aaa');
});*/

    
    event.preventDefault();

    this.socket.emit('SEND_MESSAGE', {
        input: this.state.input,
    })
  }

  render() {
    return (
      <div className="App">
        {/* <ul id="messages">a</ul> */}
        {this.renderMessages()}
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleInputChange} /><button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
