import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { index:0,
            bgimages : ["/images/Imagesofteam/abhishek-gupta.jpg",
            "/images/Imagesofteam/anuradha-daswani.jpg",
            "/images/Imagesofteam/nitesh-sharma.jpg",
            "/images/Imagesofteam/anuradha-daswani.jpg",
            "/images/Imagesofteam/nitesh-sharma.jpg"] 
                    }
    }
    previousImage(){
        if (this.state.index > 0){
            this.setState({
                index: this.state.index - 1 
            })
        }else{
            this.setState({
                index: this.state.bgimages.length - 1
            })
        }
              
    }
    nextImage() {
        if (this.state.index < this.state.bgimages.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }else{
            this.setState({
                index: 0
            })
        }
    }
    render() { 
        return (
           <div className="container mt-1 pl-0 pr-0"> 
                <div  className="container bgheader" style={{backgroundImage:"url("+ this.state.bgimages[this.state.index] +")",padding:"0px"}}>
                    <div>
                        <div  className="flex-end" >
                            <span className="slidercircle" onClick = { ()=> this.previousImage() } ><i style={{fontSize:"30px"}} className="fas fa-angle-left"></i></span>
                            <div>
                                <strong>Intensive program without any fees during the course at par with B.Tech (CS or IT) degree with better placements</strong>
                                <strong>reating local problem solvers with the right tools & understanding.</strong>
                            </div>
                            <span className="slidercircle" onClick = { ()=> this.nextImage() } ><i  style={{fontSize:"30px"}} className="fas fa-angle-right"></i></span>
                        </div>
                    </div>
                </div>
                <div className="typewriter pl-2 pr-2">  
                    <h2> Call our helpline number to join</h2>
                    <div className="typewriter-text" style={{color:"#2E2725"}}> 011 4084 6385 <i className="fas fa-mobile-alt"></i></div>
                </div>
             </div>
         );
    }
}
 
export default Header;