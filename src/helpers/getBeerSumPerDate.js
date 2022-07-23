// function to provide total sum of beer per month data 
const getBeerSumPerDate = (beerData) => {
  const result = [];
  Object.entries(beerData).map(([date, count]) =>
    result.push({
      date: date,
      count: count,
    })
  );
  return result;
};

export default getBeerSumPerDate;
