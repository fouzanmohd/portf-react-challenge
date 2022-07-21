
import dateFormat from "../../helpers/dateFormat";
import { Bar } from "@nivo/bar";
import { axisBottom,axisLeft,theme,legends } from "./BarChartHelper";

const BarChart = ({ beerData, result }) => {

    

    const barChartData = []
    beerData.map(beer => barChartData.push({
        id: beer.id,
        name:beer.name,
        date:dateFormat(beer.first_brewed),
        abv:beer.abv
    }))

    console.log(result)

    

return (
    <>
    BarChart
    <Bar
      width={1300}
      height={500}
      margin={{ top: 60, right: 100, bottom: 60, left: 80 }}
      data={result}
      keys={["count"]}
      indexBy="date"
      innerPadding={0}
      labelTextColor="inherit:darker(2.4)"
      labelSkipWidth={12}
      labelSkipHeight={12}
      enableGridX={false}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
      //colorBy={colorBy}
      theme={theme}
      legends={legends}
    />
    </>
)
};

export default BarChart;
