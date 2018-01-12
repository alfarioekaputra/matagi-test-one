import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  renderMessages() {
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
    this.setState({
      input: '',
      messages: [
        ...this.state.messages,
        this.state.input,
      ]
    });
    event.preventDefault();
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
