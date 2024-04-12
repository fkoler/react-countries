const SearchBar = (props) => {
    return (
        <input
            type='search'
            placeholder='Search for...'
            onChange={props.onChange}
        />
    );
};

export default SearchBar;
