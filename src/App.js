import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import { useState, useEffect } from "react";
import fetchData from "./helpers/fetchData";
import DateRangePicker from "./components/DateRangePicker/DateRangePicker";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <>
      <div className="filterWrapper">
        <DateRangePicker />
      </div>
      <div className="barChartWrapper">
        <BarChart beerData={data} />
      </div>
    </>
  );
}

export default App;
