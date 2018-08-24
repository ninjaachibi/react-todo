import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleChange(event) {
    this.setState({typedText: event.target.value})
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({typedText: ''});
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="task" onChange={(e) => this.handleChange(e)} value={this.state.typedText}/> <button onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    )
  }
}

export default InputLine;
