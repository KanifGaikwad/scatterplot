import React from "react";

const Circle = () => {
    const circleProps = {
        height: "25px",
        width: "25px",
        backgroundColor: "#bbb",
        borderRadius: "50%",
        display: "inline-block"
    };

    return (
        <div>
            <span style={circleProps}/>
            <span style={circleProps}/>
            <span style={circleProps}/>
            <span style={circleProps}/>
        </div>
    );
};

export default Circle;