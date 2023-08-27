import React, { Component } from "react";

class Amthal extends Component {
  constructor() {
    super();
    this.state = { mathal: {}, amthal: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3006/amthal/random")
      .then((response) => response.json())
      .then((json) => this.setState({ mathal: json }));
  }

  fetchAmthal = () => {
    fetch("http://localhost:3006/amthal/ten")
      .then((response) => response.json())
      .then((json) => this.setState({ amthal: json }));
  };

  render() {
    return (
      <div>
        <h1>motivation</h1>
        <p>{this.state.mathal.title}</p>
        <hr></hr>
        <h1>are you need more ?</h1>
        <button style={{width:"300px", fontSize:"50px"}} className="btn" onClick={this.fetchAmthal}>
          motivation
        </button>
        {this.state.amthal.map((mathal) => {
          return <p key={mathal.id}>{mathal.title}</p>;
        })}
      </div>
    );
  }
}

export default Amthal;
