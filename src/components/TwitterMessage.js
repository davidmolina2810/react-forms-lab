import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      remaining: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      remaining: this.state.remaining - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message}
          onChange={this.handleChange}
        />
        <p>{this.state.remaining} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
