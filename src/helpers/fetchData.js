import axios from 'axios';

async function fetchData(setState,url) {
    let pageNumber = 1;
    let itemsInPage;
    let data = []
    do {
      const response = await axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`);
      itemsInPage = response.data.length
      pageNumber++
      if (itemsInPage>0) data.push(response.data)
    } while (itemsInPage>1) 
    setState(data);
  }

export default fetchData;
