import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      buildings: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({ filterText: value });
  }

  selectedUpdate(id) {
    this.setState({ selectedBuilding: id });
  }

  addBuilding(code, name, address, coordinates) {
    let id = Math.max.apply(Math, this.state.buildings.map(function(building) {
      return building.id;
    })) + 1;
    const newBuildings = this.state.buildings.concat([{
      id: id,
      code: code,
      name: name,
      address: address,
      coordinates: {
        latitude: coordinates,
        longitude: coordinates
      }
    }]);
    this.setState({ buildings: newBuildings });
  }

  removeBuilding(code) {
    const { buildings } = this.state;

    var newBuildings = [];

    buildings.forEach(function(building, i) {
      if (building.code.toLowerCase() !== code.toLowerCase()) {
        var newBuilding = {
          id: i + 1,
          code: building.code,
          name: building.name
        };
        
        if (building.address) {
          newBuilding.address = building.address;
        }
        
        if (building.coordinates) {
          newBuilding.coordinates = building.coordinates;
        }
        
        newBuildings[i] = newBuilding;
      }
    });
    
    this.setState({ buildings: newBuildings });
  }

  render() {
    return(
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#addBuildingModal"
              >
                Add Building
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#removeBuildingModal"
              >
					      Remove Building
				      </button>
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)}
              />
              <RemoveBuilding
                removeBuilding={this.removeBuilding.bind(this)}
              />
              <div className="tableWrapper">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <BuildingList
                    buildings={this.state.buildings}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                buildings={this.state.buildings}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;