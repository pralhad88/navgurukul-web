import React, { Component } from 'react';
import {  MDBRow, MDBCardBody,MDBView, MDBMask, MDBCol,MDBContainer } from "mdbreact";
import Teamdata from '../Data/team.json'

class Teams extends Component {
    render() { 
        return (
            <MDBContainer className="text-center">
                <MDBCardBody >
                    <h2 className="h1-responsive font-weight-bold" style={{color:"#2E2725"}}>
                        Team
                    </h2>
                    <strong className="w-responsive mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </strong>
                    <MDBRow className="d-flex justify-content-center">
                        {/* from herte cards are starting  */}
                        { Teamdata.map((Teamdata, index) => {                           
                                return <MDBCol key = {index} lg="3" className="card" style={{margin:'20px'}} >
                                            <MDBView className="overlay z-depth-1" waves>
                                                <img
                                                src={Teamdata.img}
                                                alt={Teamdata.name}
                                                className="img-fluid"
                                                />
                                                <a href="#!">
                                                <MDBMask overlay="white-slight" />
                                                </a>
                                            </MDBView>
                                            <a href={Teamdata.linkedin} target="_blank" rel="noopener" ><button style={{width:"100%",margin:"0px",backgroundColor:"#45526e",color:"white"}} className="btn" width="100%"><i className="fab fa-linkedin-in pr-1"></i> Linkedin</button></a>
                                            <div style={{padding:"1rem"}}>
                                                <a  href={Teamdata.linkedin}><h5 className="font-weight-bold mb-3">{Teamdata.name}</h5></a>
                                                <p className="text-uppercase blue-text">{Teamdata.post}</p>
                                                <p>
                                                    {Teamdata.about}
                                                </p>
                                            </div>
                                        </MDBCol>
                        })}
                    </MDBRow>
                </MDBCardBody>
            </MDBContainer>
          );
    }
}
 
export default Teams;