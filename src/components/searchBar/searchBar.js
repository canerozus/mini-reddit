import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUrl } from '../../store/postSlice'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue === '') {
            dispatch(setUrl('popular'));
            setSearchValue('');
        } else {
            dispatch(setUrl(searchValue));
            setSearchValue('');
        }

    };


    return (

        <form className="d-flex" onSubmit={handleSubmit}>
            <input onChange={handleChange}
                value={searchValue}
                type="text"
                placeholder="Subreddit Search" 
                className="searchbar form-control me-2" 
                type="search" 
                aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

    )
}

