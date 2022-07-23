import axios from "axios";
import { format } from "date-fns";

let apiUrl = 'https://api.punkapi.com/v2/beers?'
export async function fetchData(pageNumber = 1, startDate,endDate,abvValue,abvCondition) {
    let itemsInPage;
    let data = [];
    
    do {
      const urlParams = new URLSearchParams()
        if (startDate) console.log(urlParams.append('brewed_after', format(startDate,"MM-yyyy")))
        if (endDate) urlParams.append('brewed_before', format(endDate,"MM-yyyy"))
        if ((abvValue) && (abvCondition==='above')) urlParams.append('abv_gt', abvValue)
        if ((abvValue) & (abvCondition==='below')) urlParams.append('abv_lt', abvValue)
      console.log(apiUrl + `${urlParams.toString()}&page=${pageNumber}&per_page=80`);
      const response = await axios.get(
        apiUrl + `${urlParams.toString()}&page=${pageNumber}&per_page=80`
      );
      itemsInPage = response.data.length;
      pageNumber++;
      if (itemsInPage > 0) data.push(response.data);
    } while (itemsInPage > 1);
    return data;
  }