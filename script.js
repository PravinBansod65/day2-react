import React from "react";
import ReactDOM from "react-dom/client";
import { Component } from 'react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increamentCount = () => {
        const curr = this.state.count;
        this.setState({ count: curr + 1 })
    }
    render() {
        return (
            <>
                <p>Button clicked {this.state.count} times</p>
                <button onClick={this.increamentCount}>Click me</button>
            </>

        )
    }

}

// ? day-2
// const heading = React.createElement("h1", { class: "abc" }, [

//   React.createElement("h2", { class: "h2" }, "Hello world"),
//   React.createElement("h4", { class: "h4" }, "Hello h4 worsdfsfsdfsfsld"),
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
  <Container/>
  </div>
); 
