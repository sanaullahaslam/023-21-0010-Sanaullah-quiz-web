import React from 'react';
import Pic from '../assets/Pic.PNG';

const style = {
  backgroundColor: "rgba(255, 238, 252, 1)",
  justifyContent: "center",
  fontFamily: "inter",
};

export default function Welcome() {
  return (
    <div>
      <div className='container-fluid' style={style}>
        <div className='row'>
          <div className='col-md-6 col-sm-12' style={{ width: "25%", margin: "auto" }}>
            <span style={{ color: "transparent", backgroundImage: "linear-gradient(to right, rgba(53, 92, 153, 1), rgba(235, 122, 101, 1), rgba(169, 249, 225, 1))", WebkitBackgroundClip: "text", fontSize: "3vw" }}>Brainstorm</span>
            <br />
            <p style={{ fontSize: "3vw" }}>your book easily</p>
            <p style={{ fontFamily: "Poppins" }}>
              World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.
            </p>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <button style={{ borderRadius: "20px", backgroundColor: "rgba(255, 238, 252, 1)", color: "black", padding: "10px 20px", marginRight: "10px" }}>Request Demo</button>
              <button style={{ borderRadius: "20px", backgroundColor: "#EB7A65", color: "white", padding: "10px 20px" }}>Try for Free</button>
            </div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <img
              src={Pic} // Update with the path to your image
              alt="Hello Image"
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ fontWeight: "bold", color: "black" }}>Watch the product overview</p>
              <p style={{ color: "grey" }}>3 min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
