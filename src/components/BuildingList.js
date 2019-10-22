import React from 'react';

class BuildingList extends React.Component {
	render() {
		const { data } = this.props;

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}

export default BuildingList;