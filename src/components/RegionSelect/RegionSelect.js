const RegionSelect = (props) => {
    return (
        <select name='region' onChange={props.onChange}>
            <option value='allRegions'>All Regions</option>

            {props.regions.map((region, index) => (
                <option key={index} value={region}>
                    {region}
                </option>
            ))}
        </select>
    );
};

export default RegionSelect;
