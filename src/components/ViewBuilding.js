import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { buildings, selectedBuilding } = this.props;

		const buildingInfo = buildings.filter(building => {
			return building.id === selectedBuilding;
		})
		.map(building => {
			var hasAddress = false;
			var hasCoordinates = false;

			if (building.address && (building.address !== '')) {
				hasAddress = true;
			}

			if (building.coordinates && building.coordinates.latitude !== '' && building.coordinates.longitude !== '') {
				hasCoordinates = true;
			}

			return (
				<div key={building.id}>
					<span>Code: {building.code}</span><br />
					<span>Name: {building.name}</span><br />
					{hasAddress && <span>Address: {building.address}</span>}<br />
					{hasCoordinates && <span>Coordinates: {building.coordinates.latitude}, {building.coordinates.longitude}</span>}
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