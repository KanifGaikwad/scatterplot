import React from 'react';
import math from 'mathjs';
import '../sass/scatterplot.scss';
import dateArithmetic from 'date-arithmetic';

const SplitXTimeLine = (props) => {
    const {numberOfDays, start_day} = props.splitXTimeLineProps;
    const percentWidth = math.chain(100)
        .divide(numberOfDays)
        .done();
    const style_td = {
        width: `${percentWidth}%`,
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
            PROPS.push(<td key={i} style={style_td}/>);
        }
        return PROPS;
    };
    const TIME_LINE_LABEL_PROPS = () => {
        let PROPS = [];
        for (let i = 0; i < numberOfDays; i++) {
            PROPS.push(<td key={i}>
                <label className={'x-label-props'}>
                    {dateArithmetic.add(start_day, i, 'day').toDateString()}
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
                {TIME_LINE_LABEL_PROPS()}
            </tr>
            </tbody>
        </table>
    );
};

export default SplitXTimeLine;