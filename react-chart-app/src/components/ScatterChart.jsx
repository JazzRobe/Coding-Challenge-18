import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({data}) => {
    const chartData = {
        datasets: [
            {
                label: "Expenses vs Profits",
                data: data.expenses.map((value, index) => ({
                    x: value,
                    y: data.profits[index],
                })),
                backgroundColor: "rgba(0, 81, 255, 0.66)",
            },
        ],
    };

    return <ChartComponent type="scatter" data={chartData}/>;
};

export default ScatterChart;