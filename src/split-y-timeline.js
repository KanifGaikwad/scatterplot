import React from 'react';
import '../sass/scatterplot.scss';

const SplitYTimeline = () => {
    const TIME_LINE_PROPS = () => {
        let PROPS = [];
        for (let i = 0; i < 10; i++) {
            PROPS.push(<tr className='tr-1' key={i}>
                <td/>
            </tr>)
        }
        return PROPS;
    };
    return(
        <table className='y-timeline-props'>
            <tbody>
            {TIME_LINE_PROPS()}
            </tbody>
        </table>
    );
};

export default SplitYTimeline;