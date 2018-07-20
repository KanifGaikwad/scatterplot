import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from '../src/dashboard'

const Runner = () => {
    const plotpoints = [
        {
            "start_time": "2017-05-24T04:56:12Z",
            "status": "pass",
            "duration": 250,
        },
        {
            "start_time": "2017-05-26T03:22:12Z",
            "status": "error",
            "duration": 205,
        },
        {
            "start_time": "2017-05-22T03:22:12Z",
            "status": "error",
            "duration": 210,
        },
        {
            "start_time": "2017-05-23T02:24:12Z",
            "status": "fail",
            "duration": 26,
        },
        {
            "start_time": "2017-05-21T05:24:12Z",
            "status": "pass",
            "duration": 150,
        }
    ];

    return (<div style={{
        height: "300px",
        width: "1200px",
        marginTop:"10%"
    }}>
        <DashBoard plotpoints={plotpoints}/>
    </div>)
};

ReactDOM.render(<Runner/>, document.getElementById('index'));