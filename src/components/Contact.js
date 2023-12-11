import React from "react";
// import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import contact from '../asstes/images/contact.jpg';

export const Contact = ()=>{
    const style ={
        width:"490px",
        height:"55px",
        textAlign:"center",
        display:"inline-block",
        margin:"40px"
    }
    const body = {
        backgroundColor:"white"
    }
    return(
        <>
            <div className="container-fluid p-5" style={body}>
                <div className="row">
                    <h1>Contact</h1>
                    <div className="col-sm-12 col-mg-12 col-lg-12">
                        <Form className=" p-5 rounded mb-5 ">
                            <Form.Group className="mb-5 d-nline" controlId="name">
                                <Form.Control type="text" placeholder="Full Name!"  style={style}/>
                                <Form.Control type="tel" placeholder="phone!" style={style}/>
                                <Form.Control type="address" placeholder="Address" style={style} />
                                <Form.Control type="email" placeholder="Email" style={style}/>
                                <Form.Control as="textarea" rows={6} placeholder="Description" style={{width:"1060px",marginLeft:"35px"}}/>
                            </Form.Group>
                            <button style={{width:"20%",textAlign:"center",float:"right",marginRight:"290px"}} type="submit" class="btn btn-success mb-3 ms-2">Submit</button>
                        </Form>
                    </div>
                    
                </div>
            
            </div>
        </>
        
    )
}