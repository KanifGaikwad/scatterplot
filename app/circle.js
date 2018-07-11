import React from "react";

const Circle = () => {

    const style = {
        height: "10px",
        width: "10px",
        backgroundColor: "green",
        borderRadius: "50%",
        display: "inline-block"
    };

    return (
        <div>
            <span style={style}/>
        </div>
    );
};

export default Circle;