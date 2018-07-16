import Circle from "./circle";
import React from "react";
import math from 'mathjs';
import toDate from 'normalize-date';
import '../sass/scatterplot.scss';
import SplitYTimeline from './split-y-timeline';
import LabelYTimeline from "./label-y-timeline";

const DashBoard = ({plotpoints}) => {
    const MAX_DURATION_LIMIT = 300;
    const timeArray = plotpoints.map((point) => toDate(point.start_time).valueOf());
    const MAX_TIME = Math.max(...timeArray);
    const MIN_TIME = Math.min(...timeArray);
    const toPosY = (duration) => {
        return math.chain(duration)
            .multiply(100)
            .divide(MAX_DURATION_LIMIT)
            .done();
    };
    const toPosX = (rfcDate) => {
        const res1 = math.chain(toDate(rfcDate).valueOf())
            .subtract(MIN_TIME).done();
        const res2 = math.chain(MAX_TIME)
            .subtract(MIN_TIME)
            .done();
        return math.chain(res1)
            .divide(res2)
            .multiply(100)
            .done();
    };
    const points = plotpoints.map((point, index) => {
        return {
            posY: toPosY(point.duration).toString().concat('%'),
            posX: toPosX(point.start_time).toString().concat('%'),
            status: point.status,
            id: index
        }
    });
    return (
        <section className={'height-width-100'}>
            <LabelYTimeline/>
            <aside className={'container-props'}>
                <SplitYTimeline/>
                {points.map((point, index) =>
                    <Circle key={index} posX={point.posX} posY={point.posY} status={point.status}/>
                )}
            </aside>
        </section>
    );
};

export default DashBoard;