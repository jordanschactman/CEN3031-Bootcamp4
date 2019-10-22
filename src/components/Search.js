import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		// here you will need to update the value of the filter with the value from the textbox
		const val = this.filterValue.value;
		this.props.filterUpdate(val);
	}

	render() {
		// you will need to save the value from the textbox and update it as it changes
		// you will need the onChange value for the input tag to capture the textbox value

		return (
			<form>
				<input
					type="text"
					ref={ (value) => { this.filterValue = value } }
					placeholder="Type to Filter"
					onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}

export default Search;