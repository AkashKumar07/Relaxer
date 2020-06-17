import React from 'react';

import Aux from '../../hoc/Aox/Aox';

import './Relaxer.css';

class relax extends React.Component {

    state={
        action: "Get Ready!! we are about to start"
    }

    componentDidMount(){
        const totalTime = 7500;
        const breatheTime = (totalTime/5) * 2;
        const holdTime = totalTime/5;
        setInterval(() => {
            this.setState({action : "Breath In"})
            setTimeout(() =>{
                this.setState({action: "Hold"})
                setTimeout(()=>{
                    this.setState({action : "Breathe Out"})
                }, holdTime)
            }, breatheTime)
            }, totalTime)
    }
    
    render(){

        // const totalTime = 7500;
        // const breatheTime = (totalTime/5) * 2;
        // const holdTime = totalTime/5;
        // let animate = "container";
        // let action = ""

        return(
            <Aux>
            {/* {setInterval(() => {
            action = "Breath In"
            animate = "container grow";
            setTimeout(() =>{
                action = "Hold";
                setTimeout(()=>{
                    action = "Breathe Out";
                    animate = "container shrink";
                }, holdTime)
            }, breatheTime)
            }, totalTime)} */}
            <h1 className="heading">Relaxer</h1>
            <div className="container">
                <div className="circle"></div>
                    <p>{this.state.action}</p>
                <div className="pointer-container">
                    <span className="pointer"></span>
                </div>
                <div className="gradient circle"></div>
            </div>
            </Aux>
        );
    }
}

export default relax;