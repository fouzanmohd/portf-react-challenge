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
