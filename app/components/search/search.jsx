import React, { useContext } from 'react';

import { StoreContext } from '../store/store';



const Search = () => {
    const { term, sort, searchTerm } = useContext(StoreContext);

    const searchTermChangeHandler = (event) => {
        searchTerm(event.target.value);
    }
    
    const searchSortChangeHandler = (event) => {
        searchTerm(event.target.value);
    }

    return (
        <div>
            <div>SEARCH:</div>
            <br />
            <div>
                <input type='text' placeholder='filter' value={term} onChange={searchTermChangeHandler} />
                <select name='' id='' value={sort}  onChange={searchSortChangeHandler}>
                    <option value=''>Sort by</option>
                    <option value='sort-by-name-asc'>Sort by name asc</option>
                    <option value='sort-by-name-desc'>Sort by name desc</option>
                    <option value='sort-by-price-asc'>Sort by price asc</option>
                    <option value='sort-by-price-desc'>Sort by price desc</option>
                </select>
            </div>
            <br />
        </div>
    );
}

export default Search;