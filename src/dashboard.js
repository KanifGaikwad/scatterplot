import Circle from "./circle";
import React from "react";
import math from 'mathjs';
import toDate from 'normalize-date';
import '../sass/scatterplot.scss';

const DashBoard = ({plotpoints}) => {
    const MAX_DURATION_LIMIT = 300;
    const timeArray = plotpoints.map((point) => toDate(point.start_time).valueOf());
    const MAX_TIME = Math.max(...timeArray);
    const MIN_TIME = Math.min(...timeArray);
    const calculatePosX = (duration) => {
        return math.chain(duration)
            .multiply(100)
            .divide(MAX_DURATION_LIMIT)
            .subtract(6.6666)
            .done();
    };
    const calculatePosY = (rfcDate) => {
        const res1 = math.chain(toDate(rfcDate).valueOf())
            .subtract(MIN_TIME).done();
        const res2 = math.chain(MAX_TIME)
            .subtract(MIN_TIME)
            .done();
        return math.chain(res1).divide(res2).multiply(100).done();
    };
    const points = plotpoints.map((point, index) => {
        return {
            posX: calculatePosX(point.duration).toString().concat('%'),
            posY: calculatePosY(point.start_time).toString().concat('%'),
            status: point.status,
            id: index
        }
    })
    const TIME_LINE_PROPS = [
        {height: '16.7%', label: "3 min"},
        {height: '16.7%', label: ""},
        {height: '16.7%', label: "2 min"},
        {height: '16.7%', label: ""},
        {height: '16.7%', label: "1 min"},
        {width: '16.7%', label: ""}];

    const TIME_LINE_LABEL_PROPS = [
        {height: '16.7%', label: "3 min"},
        {height: '16.7%', label: "2 min"},
        {height: '16.7%', label: "1 min"}];

    return (
        <section className={'height-width-100'}>
            <section className={'y-timeline-label-props'}>
                {TIME_LINE_LABEL_PROPS.map((div) =>
                    <div className={'y-timeline-label-div-props'}>
                        <label className={'y-label-padding'}>{div.label}</label>
                    </div>
                )}
            </section>
            <aside className={'container-props'}>
                {TIME_LINE_PROPS.map((div) =>
                    <div className={'y-timeline-props'}/>
                )}
                {points.map((point) =>
                    <Circle key={point.id} posX={point.posX} posY={point.posY} status={point.status}/>
                )}
            </aside>
        </section>

    );
};

export default DashBoard;