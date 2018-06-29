import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="task"/> <button>Add Todo</button>
      </div>
    )
  }
}

export default InputLine;
