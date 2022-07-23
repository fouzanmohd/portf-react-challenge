import dateFormat from "../helpers/dateFormat";

//getting only the data required for Bar chart out of the api
export const BarChartData = (data) => {
  const ChartData = [];
  data.map((beer) =>
    ChartData.push({
      id: beer.id,
      name: beer.name,
      date: dateFormat(beer.first_brewed),
      abv: beer.abv,
    })
  );

  return ChartData;
};

export const beerBrewedPerMonth = (charData, beerByMonthCount = {}) => {
  charData.forEach((data) => {
    beerByMonthCount[data.date] = beerByMonthCount[data.date]
      ? beerByMonthCount[data.date] + 1
      : 1;
  });
  return beerByMonthCount;
};
