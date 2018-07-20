import React from "react";
import '../sass/scatterplot.scss';

const Circle = (props) => {
    const {posX, posY, status} = props;
    const STATUS_MAP = {
        error: 'red',
        pass: 'green',
        fail: 'orange'
    };
    let style = {
        backgroundColor: STATUS_MAP[status],
        bottom: posY,
        left: posX
    };
    let style_1 = {
        bottom: posY,
        left: posX
    };

    return (
        <div>
{/*
            <span style={style_1} className={'circle-props-1'}/>
*/}
            <span style={style} className={'circle-props'}/>
        </div>
    );
};

export default Circle;