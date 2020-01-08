import React from 'react'

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div >
			<input 
			className='pa3 b--green bg-lightest-blue'
				type='search'
				placeholder='search robot' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;