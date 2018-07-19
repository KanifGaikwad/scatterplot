import Circle from "./circle";
import React from "react";
import math from 'mathjs';
import toDate from 'normalize-date';
import '../sass/scatterplot.scss';
import SplitYTimeline from './split-y-timeline';
import LabelYTimeline from './label-y-timeline';
import _ from 'underscore';
import dateArithmetic from 'date-arithmetic';
import SplitXTimeLine from './split-x-timeline';

const DashBoard = ({plotpoints}) => {
    const plotpointsWithNumberDate = plotpoints.map((point) => {
        point.dateInNumber = toDate(point.start_time).valueOf();
        return point;
    });
    const sortedByDate = _.sortBy(plotpointsWithNumberDate, (plotPoint) => plotPoint.dateInNumber);
    const start_day = toDate(_.first(sortedByDate).start_time);
    const last_day = toDate(_.last(sortedByDate).start_time);
    const numberOfDays = dateArithmetic.diff(start_day, last_day, "day", false);
    const MAX_DURATION_LIMIT = 300;
    const MIN_TIME = _.first(sortedByDate).dateInNumber;
    const MAX_TIME = _.last(sortedByDate).dateInNumber;

    const splitXTimeLineProps = {
        numberOfDays,
        start_day,
        last_day
    };

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
    const points = sortedByDate.map((point, index) => {
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
                <SplitXTimeLine splitXTimeLineProps={splitXTimeLineProps}/>
            </aside>
        </section>
    );
};

export default DashBoard;