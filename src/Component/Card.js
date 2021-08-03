import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons';


class Card extends React.Component{
        
        render(){
                return(
                        <div className="divBorder">
                                
                                <div >
                                        {(this.props.linkvalid === "Not" ? <FontAwesomeIcon icon={faFileVideo} size="6x" className="invalid"/>
                                                                        : <img key={this.props.keys} src= {this.props.imagelinks}
                                                                                 alt={this.props.alternatelinks} className="card"/>)}
                                        
                                        <div className="titleBorder">   
                                                <b>{this.props.alternatelinks}</b>
                                                
                                        </div>
                                </div>
                        </div>
                        
                                 
                        
                   
                );
        }
        
    
}

export default Card;