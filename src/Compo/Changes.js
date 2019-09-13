import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBContainer, MDBCardBody, MDBView,} from "mdbreact";

class Theorychange extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    render() { 
        return ( 
            <MDBContainer className="mb-5 px-5 pb-5">
            <MDBCardBody>
              <h2 className="h1-responsive font-weight-bold text-center my-5">
              THEORY OF CHANGE
              </h2>

              <MDBRow>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                      alt=""
                    />
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7">
                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Theory of Change - Part I</strong>
                  </h3>
                  <p>
                  Our students are equipped with skills to pursue aspirational jobs like software engineering. They choose to join the mainstream workforce or stay back in their
                   communities and work remotely on opportunities which 
                   are made available to them. They become socio-economic centers in their
                    families & communities.
                  </p>
                </MDBCol>
              </MDBRow>
              <hr className="my-5" />
              <MDBRow>
                <MDBCol lg="7">

                  <h3 className="font-weight-bold mb-3 p-0">
                    <strong>Theory of Change - Part II</strong>
                  </h3>
                  <p>
                  Our students use their skills to solve the problems that are plaguing their communities. From making simple apps to learn english to social network for farmers, there is a big role our alumni is playing to bring technology to their communities.
                   Our alumni will be an inspiration and examples for locals to understand how learning & 
                   opportunities are getting reinvented through Internet.
                    
                  </p>
                </MDBCol>
                <MDBCol lg="5">
                  <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                      alt=""
                    />
                  </MDBView>
                </MDBCol>
              </MDBRow>
              <hr className="my-5" />

              
            </MDBCardBody>
          </MDBContainer>
         );
    }
}
 
export default Theorychange;