import React , { Component } from "react";
import './Button.css';

class Button extends Component{

    state={
       
    };

    render() {
        return(
            <div className="button">
                <button className="clac-button"
                    onClick={()=> this.props.handelClick 
                      (this.props.children)}
                >{this.props.children}</button>
            </div> 
        );
    }

}
    
export default Button;