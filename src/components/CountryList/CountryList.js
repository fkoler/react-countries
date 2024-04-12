const CountryList = (props) => {
    return (
        <div className='countries-container'>
            {props.countries.map((country, index) => (
                <div className='card-container' key={index}>
                    <img src={country.flag.medium} alt={country.name} />

                    <h3>{country.name}</h3>

                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            ))}
        </div>
    );
};

export default CountryList;
