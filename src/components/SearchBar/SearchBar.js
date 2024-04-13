const SearchBar = (props) => {
    return (
        <input
            type='search'
            value={props.value}
            placeholder='Search for...'
            onChange={props.handleOnSearchChange}
        />
    );
};

export default SearchBar;
