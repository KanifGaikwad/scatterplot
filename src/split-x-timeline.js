import React from 'react';
import math from 'mathjs';
import '../sass/scatterplot.scss';

const SplitXTimeLine = (props) => {
    const {numberOfDays, start_day} = props.splitXTimeLineProps;
    const percentWidth = math.chain(100)
        .divide(8)
        .done();
    const style = {
        width: percentWidth.toString().concat('%'),
        borderColor: "darkgray",
        height: "5px",
        borderLeftStyle: "solid",
    };
    const style_table = {
        width: "100%",
        height: "5%",
        borderCollapse: "collapse"
    };
    const TIME_LINE_PROPS = () => {
        let PROPS = [];
        for (let i = 0; i < numberOfDays; i++) {
            PROPS.push(<td key={i} style={style}/>);
        }
        return PROPS;
    };
    const TIME_LINE_PROPS_LABEL = () => {
        let PROPS = [];
        for (let i = 0; i < numberOfDays; i++) {
            PROPS.push(<td key={i}>
                <label className={'x-label-props'}>
                    {start_day.toDateString()}
                </label>
            </td>)
        }
        return PROPS;
    };
    return (
        <table style={style_table}>
            <tbody>
            <tr>
                {TIME_LINE_PROPS()}
            </tr>
            <tr>
                {TIME_LINE_PROPS_LABEL()}
            </tr>
            </tbody>
        </table>
    );
};

export default SplitXTimeLine;