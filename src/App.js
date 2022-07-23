import "./App.css";
import BarChart from "./components/BarChart/BarChart";
import { useState, useEffect } from "react";
import axios from "axios";
import FilterChart from "./components/FilterChart/FilterChart";

import { format } from "date-fns";
function App() {
  const [data, setData] = useState([]);
  const [apiUrl, setApiUrl] = useState("https://api.punkapi.com/v2/beers?");
  const { selectedStartDate, selectedEndDate, abvValue, abvCondition, render } =
    FilterChart();

  // let data = []

  useEffect(() => {
    async function fetchData(pageNumber = 1) {
      let itemsInPage;
      let data = [];
      do {
        console.log(apiUrl + `&page=${pageNumber}&per_page=80`);
        const response = await axios.get(
          apiUrl + `&page=${pageNumber}&per_page=80`
        );
        itemsInPage = response.data.length;
        pageNumber++;
        if (itemsInPage > 0) data.push(response.data);
      } while (itemsInPage > 1);
      return data;
    }

    if (
      (selectedStartDate !== "") &
      (selectedEndDate !== "") &
      (abvValue !== "") &
      (abvCondition === "above")
    ) {
      setApiUrl(
        `https://api.punkapi.com/v2/beers?brewed_after=${format(
          selectedStartDate,
          "MM-yyyy"
        )}&brewed_before=${format(
          selectedEndDate,
          "MM-yyyy"
        )}&abv_gt=${abvValue}`
      );
    } else if (
      (selectedStartDate !== "") &
      (selectedEndDate !== "") &
      (abvValue !== "") &
      (abvCondition === "below")
    ) {
      setApiUrl(
        `https://api.punkapi.com/v2/beers?brewed_after=${format(
          selectedStartDate,
          "MM-yyyy"
        )}&brewed_before=${format(
          selectedEndDate,
          "MM-yyyy"
        )}&abv_lt=${abvValue}`
      );
    } else if (abvValue !== "") {
      if (abvCondition === "above") {
        console.log("above execuuted");
        setApiUrl(
          `https://api.punkapi.com/v2/beers?abv_gt=${parseInt(abvValue)}`
        );
      } else if (abvCondition === "below") {
        console.log("belowww execuuted");
        setApiUrl(
          `https://api.punkapi.com/v2/beers?abv_lt=${parseInt(abvValue)}`
        );
      } else {
        setApiUrl("https://api.punkapi.com/v2/beers?");
      }
    } else if ((selectedStartDate !== "") & (selectedEndDate !== "")) {
      setApiUrl(
        `https://api.punkapi.com/v2/beers?brewed_after=${format(
          selectedStartDate,
          "MM-yyyy"
        )}&brewed_before=${format(selectedEndDate, "MM-yyyy")}`
      );
    } else if (selectedStartDate !== "") {
      setApiUrl(
        `https://api.punkapi.com/v2/beers?&brewed_after=${format(
          selectedStartDate,
          "MM-yyyy"
        )}`
      );
    } else if (selectedEndDate !== "") {
      setApiUrl(
        `https://api.punkapi.com/v2/beers?&brewed_before=${format(
          selectedEndDate,
          "MM-yyyy"
        )}`
      );
    } else {
      setApiUrl("https://api.punkapi.com/v2/beers?");
    }

    fetchData().then((res) => setData(res));
  }, [apiUrl, selectedStartDate, selectedEndDate, abvCondition, abvValue]);

  return (
    <>
      {console.log(abvCondition)}
      <div className="filterWrapper">{render}</div>
      <div className="barChartWrapper">
        <BarChart beerData={data} url={apiUrl} />
      </div>
    </>
  );
}

export default App;
