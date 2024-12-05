import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({data}) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Profits",
                data: data.profits,
                fill: false,
                borderColor: "rgba(38, 255, 0, 0.66)"
            }, //create the lines for each month
        ],
    };

    return <ChartComponent type="line" data={chartData}/>
    //display the lines w data
};

export default LineChart;