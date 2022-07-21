const BarChart = ({data}) => {

    const fullBeerData = data.flat();
    console.log(fullBeerData)
    return (
        <h1>
            {fullBeerData.map(data=>(
                <p>{data.name}</p>
            ))}
        </h1>
    )
}

export default BarChart;