import React from "react";

const Circle = () => {

    const style = {
        height: "20px",
        width: "20px",
        backgroundColor: "green",
        borderRadius: "80%",
        display: "inline-block",
        position:"absolute"
    };

    return (
            <span style={style}/>
    );
};

export default Circle;