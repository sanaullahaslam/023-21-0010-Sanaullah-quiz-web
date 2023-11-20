import React from 'react'



const style=
{
    backgroundColor:"rgba(255, 238, 252, 1)",
    justifyContent:"center",
    fontFamily:"inter"
}

export default function Welcome() 
{
  return (
    <div>
      <div className='container-fluid'style={style}>
            <div className='row'>
                <div className='col-md-6 col-sm-12' style={{width:"25%",margin: "auto"}}>
                    <span style={{ color: "transparent", backgroundImage: "linear-gradient(to right, rgba(53, 92, 153, 1), rgba(235, 122, 101, 1), rgba(169, 249, 225, 1))", WebkitBackgroundClip: "text", fontSize:"3vw" }}>Brainstorm</span>
                    <br/>
                    <p style={{fontSize:"3vw"}}>your book easily</p>
                    <p style={{fontFamily:"Poppins"}}>
                    World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.
                    </p>

                </div>
                <div className='col-md-6 col-sm-12'>
                <h1>HEllo</h1>
                </div>
            </div>
      </div>
    </div>
  )
}
