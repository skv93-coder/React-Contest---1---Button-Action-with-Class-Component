import React, { Component, setState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [sig, setSig] = setState(false);

    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={() => setState(true)}>
          {sig ? (
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
