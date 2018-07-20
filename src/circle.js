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

    return (
        <div>
            <span style={style} className={'circle-clicked-props'}/>
        </div>
    );
};

export default Circle;