import React from "react";

const Circle = (props) => {
    const {posX, posY, status} = props;
    const calculateColor = () => {
        if (status === 'error') {
            return 'red';
        } else if (status === 'pass') {
            return 'green';
        } else if (status === 'fail') {
            return 'yellow';
        }
    };
    const style = {
        height: "20px",
        width: "20px",
        backgroundColor: calculateColor(),
        borderRadius: "80%",
        display: "inline-block",
        position: "absolute",
        top: posX,
        marginLeft: posY
    };

    return (
        <span style={style}/>

    );
};

export default Circle;