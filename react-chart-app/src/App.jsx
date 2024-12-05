import React, { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setChartData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!chartData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Financial Dashboard</h1>
            <BarChart data={chartData} />
            <LineChart data={chartData} />
            <ScatterChart data={chartData} />
            <BubbleChart data={chartData} />
        </div>
    );
};

export default App;
