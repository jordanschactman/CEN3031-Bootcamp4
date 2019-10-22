import React from 'react';

class BuildingList extends React.Component {
	selectedUpdate(id) {
		this.props.selectedUpdate(id);
	}

	render() {
		const { data, filterText } = this.props;

		const buildingList = data.filter(building => {
			return (building.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || (building.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
		})	
		.map(directory => {
			return (
				<tr
					key={directory.id}
					onClick={() => this.selectedUpdate(directory.id)}
				>
					<td>
						{directory.code}
					</td>
					<td>
						{directory.name}
					</td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}

export default BuildingList;