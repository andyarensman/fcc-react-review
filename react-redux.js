//GETTING STARTED WITH REACT AND REDUX

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      messages: []
    }
  }
  
  // Change code above this line
  render() {
    return <div />
  }
};

  
//MANAGE STATE LOCALLY FIRST
  
  class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  submitMessage() {
    this.setState(prevState => {
      console.log(prevState.messages.concat(prevState.input))
      return {
        messages: prevState.messages.concat(prevState.input),
        input: ''
      }
      
    });
  }

  render() {
    const renderMessage = this.state.messages.map(x => <li key={x}>{x}</li>)
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}></input>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>{renderMessage}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//EXTRACT STATE LOGIC TO REDUX

const ADD = 'ADD';

const addMessage = (message) => {
  return {type: ADD, message: message}
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state
  }
}

const store = Redux.createStore(messageReducer);
