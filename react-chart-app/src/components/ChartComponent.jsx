//task 2: create reusable chart component

import React, {useRef, useEffect} from "react";
import Chart from "chart.js/auto";
//import the react and chart

const ChartComponent = ({type, data, options}) => { 
    const chartRef = useRef(null);
    let chartInstance = null;
    //added prop names and initialized charts and instances

    useEffect(() => {
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type,
                data,
                options,
            });
        };

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [type, data, options]);
    //creates a chart with the props, checks if chartRef.currrent is defined

    return <canvas ref={chartRef}/>
    //renders it on the canvas
};

export default ChartComponent;