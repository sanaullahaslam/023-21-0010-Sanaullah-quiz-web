import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import back from '../assets/images/footer-logo.svg.png';
import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.png";
export const Footer = ()=>{
    const logo = {
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        // marginRgiht:"10px",
        // marginLeft:"190px"
        
    }
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"black",marginTop:"0px",paddingTop:"50px"}}>
                <div className="row d-flex justify-content-around">
                    <div style={{width:"67px"}}> 
                       <img src={back} style={logo}/>
                    </div>
                    <div className="text-white" style={{width:"85px"}}> 
                        <h4 className="mb-3">Product</h4> 
                        Security
                        Writer for Chrom
                        Writer for Contentful 
                        Writer for Figm 
                        Grammarly alternative 
                        Request a demo 
                        Try for free
                    </div>
                    <div className="text-white" style={{width:"115px"}}> 
                        <h4 className="mb-3">Resources</h4>
                        Blog
                        Guides
                        Inclusive language
                        Style guide template
                        Terminology management
                        AI content detector
                        Free grammar check
                    </div>
                    <div className=" text-white" style={{width:"120px",marginLeft:"60px"}}>
                        <h4 className="mb-3">Company</h4>                             
                        Careers
                        Partners
                        Contact us 
                    </div>
                    <div className="text-white" style={{width:"95px"}}> 
                        <h4 className="mb-3">Support</h4>
                        Help center
                        API
                        Status
                    </div>
                </div>
                <div className="row mt-5 pb-5">
                    <div className="col-lg-4 col-md-4 col-sm-4 text-white d-iline text-center">© 2023 WRITEALY</div>
                    <div className="col-lg-4 col-md-4 col-sm-4 text-center mb-5">
                        <img src={a} style={{borderRadius:"50%",display:"inline-block",width:"40px",margin:"10px",textAlign:"center"}}/>
                        <img src={b} style={{borderRadius:"50%",display:"inline-block",width:"40px",margin:"10px",textAlign:"center"}}/>
                        <img src={c} style={{borderRadius:"50%",display:"inline-block",width:"40px",margin:"10px",textAlign:"center"}}/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 text-white text-center">TERMS | PRIVACY</div>
                </div>
            </div>
        </>
    )
}