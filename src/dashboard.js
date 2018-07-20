import Circle from "./circle";
import React from "react";
import '../sass/scatterplot.scss';
import SplitYTimeline from './split-y-timeline';
import LabelYTimeline from './label-y-timeline';
import SplitXTimeLine from './split-x-timeline';
import PositionCalculator from './position-calculator';

const DashBoard = ({plotpoints}) => {
    const {points, splitXTimeLineProps} = PositionCalculator(plotpoints);

    return (
        <section className={'height-width-100'}>
            <LabelYTimeline/>
            <aside className={'container-props'}>
                <SplitYTimeline/>
                {points.map((point, index) =>
                    <Circle key={index} posX={point.posX} posY={point.posY} status={point.status}/>
                )}
                <SplitXTimeLine splitXTimeLineProps={splitXTimeLineProps}/>
            </aside>
        </section>
    );
};

export default DashBoard;