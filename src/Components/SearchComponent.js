import React, { useRef } from 'react';


const SearchComponent = (props) => {
    const search = useRef();
    
    return(
        <React.Fragment>
            <input type="text"
            className="SearchBar"
            placeholder="Search for a city"
            ref = {search} ></input>
            <button onClick={() => props.searchCity(search.current.value)}
            className="material-icons">search</button>
            </React.Fragment>
    );
}

 
export default SearchComponent;
