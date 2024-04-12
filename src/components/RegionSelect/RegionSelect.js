const RegionSelect = (props) => {
    return (
        <select name='region' onChange={props.handleChangeRegion}>
            <option value='allRegions'>All Regions</option>

            {props.allRegions.map((region, index) => (
                <option key={index} value={region}>
                    {region}
                </option>
            ))}
        </select>
    );
};

export default RegionSelect;
