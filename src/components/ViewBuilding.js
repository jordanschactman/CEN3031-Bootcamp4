import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;

		const buildingInfo = data.filter(directory => {
			return directory.id === selectedBuilding;
		})
		.map(directory => {
			return (
				<div key={directory.id}>
					<span>Code: {directory.code}</span><br />
					<span>Building: {directory.name}</span><br />
					{directory.address && <span>Address: {directory.address}</span>}<br />
					{directory.coordinates && <span>Coordinates: {directory.coordinates.latitude}, {directory.coordinates.longitude}</span>}
				</div>
			);
		});

		return (
			<div>
				{selectedBuilding ?
					<div>
						<h4>Building Information</h4>
						{buildingInfo}
					</div> :
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				}
			</div>
		);
	}
}

export default ViewBuilding;