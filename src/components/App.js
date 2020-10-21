import React, { Component, setState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { sig: false };
  }
  handleClick = () => {
    setState({
      sig: true
    });
  };
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={() => this.handleClick()}>
          {this.tate.sig ? (
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          ) : null}
        </button>
      </div>
    );
  }
}

export default App;
