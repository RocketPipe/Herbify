import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <form> 
            <input 
                type="text" 
                placeholder="Search for herbs, ailments..." 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button> {/* For now, the button won't do anything */}
        </form>
    );
};

export default Search;
