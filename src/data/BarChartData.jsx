import dateFormat from "../helpers/dateFormat";

//function to get only the data required for Bar chart out of the api
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

//function to count the beers brewed per month
export const beerBrewedPerMonth = (charData, beerByMonthCount = {}) => {
  charData.forEach((data) => {
    beerByMonthCount[data.date] = beerByMonthCount[data.date]
      ? beerByMonthCount[data.date] + 1
      : 1;
  });
  return beerByMonthCount;
};

// function to sort array by date
export const sortArrayByDate = (arr) => {
  return arr.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
};