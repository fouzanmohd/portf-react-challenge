import fetchData from "../helpers/fetchData";
import { useEffect, useState } from "react";

const BeerData = () => {
  const [beerData, setBeerData] = useState([]);
  useEffect(() => {
    fetchData(setBeerData);
  }, []);
  return beerData;
};

export default BeerData;
