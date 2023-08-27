import React from "react";
// import profilePicture from "../assets/anonymous.jpeg";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    // if (this.state.displayBio) {
    //   //this.state.displayBio = false;
    //   this.setState({displayBio: false});
    // } else {
    //   //this.state.displayBio = true;
    //   this.setState({displayBio: true});
    // }
    this.setState({ displayBio: !this.state.displayBio });
    console.log(this.state);
  }


      
  render() {
    return (
          <div>
            <img style ={{height:"300px", borderRadius:"100px"}} src="https://res.cloudinary.com/dqvdzugy5/image/upload/v1691623698/userlogo_tuhyn3.png" alt="me"/>
            <h1>Hello</h1>
            <p> Iam Sahar Moustafa</p>
            {this.state.displayBio ? (
              <div>
                <p>Mern Stack developer</p>
                <p>E- commerce - woocommerce</p>
                <button  style={{width:"300px", fontSize:"50px"}} onClick={this.toggle} className="btn">
                  Hide
                </button>
              </div>
            ) : (
              <button style={{width:"300px", fontSize:"50px"}} onClick={this.toggle} className="btn">
                Show More
              </button>
            )}
          </div>
    );
  }
}

export default Profile;
