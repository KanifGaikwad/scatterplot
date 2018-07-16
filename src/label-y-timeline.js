import React from 'react';
import '../sass/scatterplot.scss';

const LabelYTimeline = () => {
    const TIME_LINE_LABEL_PROPS = [
        {label: "5 min"},
        {label: "4 min"},
        {label: "3 min"},
        {label: "2 min"},
        {label: "1 min"}];

    return (<section className='y-timeline-label-props'>
        {TIME_LINE_LABEL_PROPS.map((div, index) =>
            <div key={index} className={'y-timeline-label-div-props'}>
                <label className={'y-label-padding'}>{div.label}</label>
            </div>
        )}
    </section>);
};

export default LabelYTimeline;