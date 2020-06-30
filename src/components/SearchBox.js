import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className = 'pa2'>
			<input
			className='i pa3 ba br3 b--near-black bg-moon-gray'
			type ='search'
			placeholder='Search Robots....' 
			onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;