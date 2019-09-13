import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 

            <footer className="page-footer font-small mdb-color pt-4">
              <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Navgurukul</h6>
                    <p className="footertext">How an IIT Alumnus & a School Dropout Are Skilling Underprivileged Students to Get IT Jobs in a Year</p>
                  </div>
                  <hr className="w-100 clearfix d-md-none"/>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p className="footertext">
                      <i className="fas fa-home mr-3"></i> Dharamshala,HP Boy's Campus</p>
                    <p className="footertext">
                    <p className="footertext">
                      <i className="fas fa-home mr-3"></i> Banglore Gorl's Campus</p>
                    <p className="footertext"></p>
                      <i className="fas fa-envelope mr-3"></i> hi@navgurukul.org</p>
                    <p className="footertext">
                      <i className="fas fa-phone mr-3"></i> To join - 011 4084 6385</p>
                    
                  </div>
                </div>
                <div className="text-center">
                <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/navgurukul.dharamsala/">
                            Dharamshala <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/navgurukul.dharamsala/">
                            Banglore <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/navgurukul/">
                            facebook <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/channel/UC9yaihhuBLgke9O6IVC-Gsw">
                            Youtube <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                </div>
                <hr/>
                <div>
                  <div>
                    <p className="text-center mb-0  pb-2">© 2019 NavGurukul.org </p>
                  </div>
                </div>
              </div>
            </footer>
         );
    }
}
 
export default Footer;