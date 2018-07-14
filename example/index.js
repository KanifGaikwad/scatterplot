import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from '../src/dashboard'

const Runner = () => {
    const plotpoints = [
        {
            "start_time": "2017-11-24T04:56:12Z",
            "status": "pass",
            "duration": 126,
        },
        {
            "start_time": "2017-11-26T03:22:12Z",
            "status": "error",
            "duration": 205,
        },
        {
            "start_time": "2017-11-23T02:24:12Z",
            "status": "fail",
            "duration": 20,
        },
        {
            "start_time": "2017-11-21T05:24:12Z",
            "status": "pass",
            "duration": 120,
        },
        {
            "start_time": "2017-11-29T06:24:12Z",
            "status": "error",
            "duration": 300,
        },
        {
            "start_time": "2017-11-26T14:12:12Z",
            "status": "pass",
            "duration": 200,
        }
    ];

    return (<div style={{
        height: "250px",
        width: "1000px",
        marginTop:"10%"
    }}>
        <DashBoard plotpoints={plotpoints}/>
    </div>)
}

ReactDOM.render(<Runner/>, document.getElementById('index'));