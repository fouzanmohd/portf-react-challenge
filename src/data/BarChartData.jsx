import dateFormat from "../helpers/dateFormat";

//getting only the necessary data out of the api
const BarChartData = (data) => {
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

export default BarChartData;
