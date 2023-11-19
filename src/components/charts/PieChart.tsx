import React from 'react';
import {ArcElement, Chart as ChartJS, Tooltip} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

interface Props {
    data: any

}


const PieCharts = ({data}: Props) => {
    return <Pie data={data}/>;
};

export default PieCharts;