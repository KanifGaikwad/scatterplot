import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Circle from '../app/draw-circle';

class Index extends Component{
    render(){
        return(<Circle/>)

    }
}

ReactDOM.render(<Index />, document.getElementById('root'));