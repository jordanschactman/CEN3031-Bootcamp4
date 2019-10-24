import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			name: '',
			address: '',
			coordinates: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.closeButtonRef = React.createRef();
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.addBuilding(this.state.code, this.state.name, this.state.address, this.state.coordinates);
		this.closeButtonRef.current.click();
		event.target.reset();
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	render() {
		return (
			<div
				className="modal fade"
				id="addBuildingModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="addBuildingModalLabel"
				aria-hidden="true"
			>
				<div
					className="modal-dialog"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addBuildingModalLabel"
							>
								Add Building
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								ref={this.closeButtonRef}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label
										htmlFor="building-code"
										className="col-form-label"
									>
										Code:
									</label>
									<input
										type="text"
										className="form-control"
										id="building-code"
										name="code"
										onChange={this.handleChange}
										required
									></input>
								</div>
								<div className="form-group">
									<label
										htmlFor="building-name"
										className="col-form-label"
									>
										Name:
									</label>
									<input
										type="text"
										className="form-control"
										id="building-name"
										name="name"
										onChange={this.handleChange}
										required
									></input>
								</div>
								<div className="form-group">
									<label
										htmlFor="building-address"
										className="col-form-label"
									>
										Address:
									</label>
									<input
										type="text"
										className="form-control"
										id="building-address"
										name="address"
										onChange={this.handleChange}
									></input>
								</div>
								<div className="form-group">
									<label
										htmlFor="building-coordinates"
										className="col-form-label"
									>
										Coordinates:
									</label>
									<input
										type="text"
										className="form-control"
										id="building-coordinates"
										name="coordinates"
										onChange={this.handleChange}
									></input>
								</div>
								<div className="row justify-content-end">
								<button
									type="submit"
									className="btn btn-primary"
								>
									Add
								</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddBuilding;