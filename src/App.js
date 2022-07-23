import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import { useState, useEffect } from "react";
import FilterChart from "./components/FilterChart/FilterChart";
import { fetchData } from "./data/FetchData";

function App() {
  const [data, setData] = useState([]);
  const { selectedStartDate, selectedEndDate, abvValue, abvCondition, render } =
    FilterChart();

  useEffect(() => {
    fetchData(
      1,
      selectedStartDate,
      selectedEndDate,
      abvValue,
      abvCondition
    ).then((res) => setData(res));
  }, [selectedStartDate, selectedEndDate, abvCondition, abvValue]);

  return (
    <>
      <div className="filterWrapper">{render}</div>
      <div className="barChartWrapper">
        <BarChart beerData={data} />
      </div>
    </>
  );
}

export default App;
