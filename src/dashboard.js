import Circle from "./circle";
import React from "react";

const DashBoard = () => {

    const plotpoints = [
        {
            "start_time": "2017-11-29T04:56:12Z",
            "status": "pass",
            "duration": 126, // in seconds
        },
        {
            "start_time": "2017-11-28T03:22:12Z",
            "status": "error",
            "duration": 205,
        },
        {
            "start_time": "2017-11-28T02:24:12Z",
            "status": "fail",
            "duration": 20,
        },
        {
            "start_time": "2017-11-28T05:24:12Z",
            "status": "pass",
            "duration": 90,
        },
        {
            "start_time": "2017-11-29T06:24:12Z",
            "status": "error",
            "duration": 90,
        },
        {
            "start_time": "2017-11-28T14:12:12Z",
            "status": "pass",
            "duration": 200,
        }
    ];

    return (
        <div style={{
            height: "400px",
            width: "800px"
        }}
        >
            <div style={{
                height: "100%",
                width: "100%",
                border: "1px",
                borderColor: "green",
                borderBottomStyle: "solid",
                borderLeftStyle: "solid",
                position: "relative"
            }}>
                <Circle posX={'30%'} posY={'30%'} status={"pass"}/>
                <Circle posX={'40%'} posY={'40%'} status={"error"}/>
                <Circle posX={'90%'} posY={'90%'} status={"fail"}/>
            </div>
        </div>
    );
};

export default DashBoard;