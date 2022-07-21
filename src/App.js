import "./App.css";
import BeerData from "./data/BeerData";
import BarChart from "./components/BarChart/BarChart";
import dateFormat from "./helpers/dateFormat";
import getBeerSumPerDate from "./helpers/getBeerSumPerDate";
function App() {


  const beerData = BeerData().flat();
  const barChartData = []
    beerData.map(beer => barChartData.push({
        id: beer.id,
        name:beer.name,
        date:dateFormat(beer.first_brewed),
        abv:beer.abv
    }))
    //console.log(barChartData)
    const beerByMonthCount = {}
    barChartData.forEach(data=>{
      beerByMonthCount[data.date] = beerByMonthCount[data.date] ? beerByMonthCount[data.date]+1 : 1
    })

    const result = getBeerSumPerDate(beerByMonthCount)
   
    
    

  return (
    <div className="App">
      <BarChart beerData={beerData} result = {result}/>
      
    </div>
  );
}

export default App;
