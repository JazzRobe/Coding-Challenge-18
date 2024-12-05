import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({data}) => {
    const chartData = {
        labels: data.months,
        datasets: [
            {
                label: "Monthly Sales",
                data: data.sales,
                backgroundColor: rgba(255, 115, 188, 0.8),
                borderColor: rgba(255, 6, 135, 0.8),
                borderWidth: 2,
            },
        ],
    };

    return <ChartComponent type="bar" data={chartData}/>;
};

export default BarChart;