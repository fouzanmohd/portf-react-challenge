import { Bar } from "@nivo/bar";
import { axisBottom, axisLeft, theme, legends } from "./BarChartHelper";
import getBeerSumPerDate from "../../helpers/getBeerSumPerDate";
import { BarChartData, beerBrewedPerMonth } from "../../data/BarChartData";

const BarChart = ({ beerData, url }) => {
  
  const fullBeerData = beerData.flat(); //collapsing the sub-arrays of data from multiple page into single array
  const barChartData = BarChartData(fullBeerData); // getting only the data required for Bar chart
  const beerByMonthCount = beerBrewedPerMonth(barChartData, {}); // counting the beers brewed per month
  const chartData = getBeerSumPerDate(beerByMonthCount); // final formatted data for barchart

  return (
    <>
      <Bar
        width={1300}
        height={500}
        margin={{ top: 60, right: 100, bottom: 60, left: 80 }}
        data={chartData}
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
