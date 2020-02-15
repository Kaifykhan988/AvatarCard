import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import './demo.css';

class Demo extends Component {
    render(){
        return <div className = "maindiv_style">
        <h1>Mohd {this.props.name} </h1>
        <h2>Kaifi</h2>
        <h3>Khan</h3>
        </div>
    }
}

export default Demo;
