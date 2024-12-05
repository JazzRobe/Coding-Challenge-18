import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({data}) => {
    const chartData = {
        dataset: [
            {
                label: "Sales, Profits, Expenses",
                data: data.expenses.map((value, index) => ({
                    x: value,
                    y: data.profits[index],
                    r: data.sales[index] / 1000, //bubble size
                })),
                backgroundColor: "rgba(131, 0, 253, 0.66)",
            },//map each data point as a bubble
        ],
    };

    return <ChartComponent type="bubble" data={chartData}/>;
};

export default BubbleChart;