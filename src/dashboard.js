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
    });

    return (
        <div className={'container-props'}>
            {points.map((point) =>
                <Circle key={point.id} posX={point.posX} posY={point.posY} status={point.status}/>
            )}
        </div>
    );
};

export default DashBoard;