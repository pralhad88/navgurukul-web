import React, { Component } from 'react';
import {MDBContainer } from "mdbreact";
import pressdata from '../Data/press.json'
import supportersdata from '../Data/supporters.json'


class Presssupported extends Component {
    state = {  }
    render() { 
        return ( 
            <MDBContainer>
                {/* press */}
                    <h2 className="h1-responsive font-weight-bold">
                       In the Press
                    </h2>
                    
                    <div className="row">
                    { pressdata.map((pressdata, index) => { 
                        return<div key={index} className="col-sm mt-4 example hoverable">
                                <a href={pressdata.link}>
                                <img
                                style={{cursor:"pointer"}}
                                src={pressdata.logo}
                                alt={pressdata.press}
                                className="img-fluid"/>
                                </a>
                            </div>
                        })}
                    </div>
              <hr className="my-5" />
                    {/* supports */}
                    <h2 className="h1-responsive font-weight-bold">
                       Supported by 
                    </h2>
                    
                    <div className="row">
                    { supportersdata.map((supportersdata, index) => { 
                        return<div key={index} className="col-sm mt-4 example hoverable supported">
                                <a href={supportersdata.link}>
                                <img
                                style={{cursor:"pointer"}}
                                src={supportersdata.logo}
                                alt={supportersdata.name}
                                className="img-fluid"/>
                                </a>
                            </div>
                        })}
                    </div>
              <hr className="my-5" />
                
        </MDBContainer>
         );
    }
}
 
export default Presssupported;
