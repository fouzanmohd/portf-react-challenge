import axios from "axios";
import {format} from "date-fns";

let apiUrl = "https://api.punkapi.com/v2/beers?";  // Main API URL
export async function fetchData(
  pageNumber,
  startDate,
  endDate,
  abvValue,
  abvCondition
) {
  let itemsInPage;
  let data = [];
  do {
    // getting the query parameters depending on user input
    const urlParams = new URLSearchParams();
    if (startDate) urlParams.append("brewed_after", format(startDate, "MM-yyyy"));
    if (endDate) urlParams.append("brewed_before", format(endDate, "MM-yyyy"));
    if (abvValue && abvCondition === "above") urlParams.append("abv_gt", abvValue);
    if (abvValue & (abvCondition === "below")) urlParams.append("abv_lt", abvValue);
    
    //fetching the data
    const response = await axios.get(
      apiUrl + `${urlParams.toString()}&page=${pageNumber}&per_page=80`
    );
    itemsInPage = response.data.length;
    pageNumber++;
    if (itemsInPage > 0) data.push(response.data);
  } while (itemsInPage > 1);
  
  return data;
}