import React from 'react';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Slider extends React.Component{
    constructor(){
        super();
        this.state={
            current: 0,
            
        };
    }


    onleftclick=()=>{
        let slidelength = this.props.imageList.length;
        let index = this.state.current;
        this.setState({current: index===0 ? slidelength-1 : index-1});
        
    }

    onrightclick=()=>{
        let slidelength = this.props.imageList.length;
        let index = this.state.current;
        this.setState({current: index===slidelength-1 ? 0 : index+1});
        
    }


    moveDot = (index) => {
        this.setState({current:index});
    }

    render(){
        return(
            <div>
                {this.props.imageList.map((slider,index)=>{
                    return(
                        <div key={index}>
                        <div className={this.state.current === index ? "current" : "normal"} key={index}>
                            {slider }
                           
                        </div>
                        
                        </div>
                    );
                })}

                <button className="button" id="prevbutton" onClick={this.onleftclick}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
                <button className="button" id="nextbutton" onClick={this.onrightclick}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>   

                <div className="container-dots">
                    {Array.from({length: 4}).map((item, index) => (
                        <div key={index}
                        onClick={() => this.moveDot(index)}
                        className={this.state.current === index ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Slider;