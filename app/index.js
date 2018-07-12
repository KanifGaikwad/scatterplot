import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DashBoard from "./dashboard";

class Index extends Component{



    render(){

        return(<DashBoard/>)
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));