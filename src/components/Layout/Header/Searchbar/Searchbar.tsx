import React from 'react';
import { StyledSearchbar } from './Searchbar.styles';

import { ReactComponent as SearchSvg } from './../../../../assets/icons/Header/search.svg';

interface SearchbarProps {
	showInput: boolean;
}
const Searchbar: React.FC<SearchbarProps> = ({ showInput }) => {
	return (
		<StyledSearchbar showInput={showInput}>
			<input type='text' name='search' placeholder='Search' />
			<div>
				<SearchSvg />
			</div>
		</StyledSearchbar>
	);
};

export default Searchbar;
