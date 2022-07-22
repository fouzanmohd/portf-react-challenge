import { Bar } from "@nivo/bar";
import { axisBottom, axisLeft, theme, legends } from "./BarChartHelper";
import getBeerSumPerDate from "../../helpers/getBeerSumPerDate";
import BarChartData from "../../data/BarChartData";
const BarChart = ({ beerData }) => {

    const fullBeerData = beerData.flat()
    const barChartData = BarChartData(fullBeerData)
    const beerByMonthCount = {}
    barChartData.forEach(data=>{
      beerByMonthCount[data.date] = beerByMonthCount[data.date] ? beerByMonthCount[data.date]+1 : 1
    })

    const result = getBeerSumPerDate(beerByMonthCount)
   
  return (
    <>
    
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
  );
};

export default BarChart;
