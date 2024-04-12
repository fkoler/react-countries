import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RegionSelect from './components/RegionSelect/RegionSelect';
import CountryList from './components/CountryList/CountryList';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [allRegions, setAllRegions] = useState([]);
    const [oneRegion, setOneRegion] = useState('allRegions');

    useEffect(() => {
        getCountries();
    }, []);

    useEffect(() => {
        const getAllRegions = () => {
            const regions = countries.map((region) => {
                return region.region;
            });

            setAllRegions([...new Set(regions)]);
        };

        getAllRegions();
    }, [countries]);

    const getCountries = async () => {
        fetch(
            'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json'
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(Object.values(data));
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const filteredCountries = countries.filter((country) => {
        const isMatchingSearch =
            country.name.toLowerCase().includes(searchField.toLowerCase()) ||
            country.capital.toLowerCase().includes(searchField.toLowerCase());

        const isMatchingRegion =
            oneRegion === 'allRegions' || country.region === oneRegion;

        return isMatchingSearch && isMatchingRegion;
    });

    const handleOnSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setOneRegion(event.target.value);
    };

    return (
        <div className='main-container'>
            <div className='search-container'>
                <SearchBar onChange={handleOnSearchChange} />
                <RegionSelect
                    regions={allRegions}
                    onChange={handleChangeRegion}
                />
            </div>

            <CountryList countries={filteredCountries} />
        </div>
    );
};

export default App;
