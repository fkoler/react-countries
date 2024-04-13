const CountryList = (props) => {
    return (
        <div className='countries-container'>
            {props.filteredCountries.map((country, index) => (
                <div className='card-container' key={index}>
                    <div className='image-container'>
                        <img src={country.flag.large} alt={country.name} />
                    </div>

                    <div className='content-container'>
                        <h3>{country.name}</h3>

                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CountryList;
