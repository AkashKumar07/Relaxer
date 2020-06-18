import React from "react";

import Aux from '../../hoc/Aox/Aox'

import './Landing.css'

class landing extends React.Component {

    componentDidMount(){
        console.log(this.props.history);
    }

    render(){
        return(
            <Aux>
                <div className="home">
                <p className="land">“Relax and rejuvenate your sacred-spirit.”</p>
                <button className="Button" onClick={() => this.props.history.push("relaxer")}><span>Lets Relax </span></button>
                </div>

            </Aux>
        )
    }
}

export default landing;