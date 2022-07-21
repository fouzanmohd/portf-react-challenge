import "./App.css";
import { useEffect, useState } from "react";
import fetchData from "./helpers/fetchData";
import BarChart from './components/BarChart/BarChart'

function App() {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    fetchData(setBeerData);
  }, []);


  return (
    <div className="App">
      <BarChart data={beerData}/>
    </div>
  );
}

export default App;
