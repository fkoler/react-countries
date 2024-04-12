const SearchBar = (props) => {
    return (
        <input
            type='search'
            placeholder='Search for...'
            onChange={props.handleOnSearchChange}
        />
    );
};

export default SearchBar;
