import React, { useEffect, useState } from 'react';

import { MoonLoader } from 'react-spinners';

import SearchBar from './components/SearchBar/SearchBar';
import RegionSelect from './components/RegionSelect/RegionSelect';
import CountryList from './components/CountryList/CountryList';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [allRegions, setAllRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('allRegions');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAllRegions = () => {
            const regions = countries.map((region) => {
                return region.region;
            });

            setAllRegions([...new Set(regions)]);
        };

        getAllRegions();
        getCountries();
    }, [countries]);

    const getCountries = async () => {
        fetch(
            'https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json'
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(Object.values(data));
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
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
            selectedRegion === 'allRegions' ||
            country.region === selectedRegion;

        return isMatchingSearch && isMatchingRegion;
    });

    const handleOnSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setSelectedRegion(event.target.value);
    };

    return isLoading ? (
        <div className='loader-container'>
            <MoonLoader color='whitesmoke' size={300} />
        </div>
    ) : (
        <div className='main-container'>
            <div className='search-container'>
                <SearchBar
                    value={searchField}
                    handleOnSearchChange={handleOnSearchChange}
                />
                <RegionSelect
                    allRegions={allRegions}
                    handleChangeRegion={handleChangeRegion}
                />
            </div>

            <CountryList filteredCountries={filteredCountries} />
        </div>
    );
};

export default App;
