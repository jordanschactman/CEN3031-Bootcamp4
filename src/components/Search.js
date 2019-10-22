import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		// here you will need to update the value of the filter with the value from the textbox
	}

	render() {
		// you will need to save the value from the textbox and update it as it changes
		// you will need the onChange value for the input tag to capture the textbox value

		return (
			<form>
				<input type="text" placeholder="Type to Filter" />
			</form>
		);
	}
}

export default Search;