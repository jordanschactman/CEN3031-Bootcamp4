import React from 'react';

class RemoveBuilding extends React.Component {
	constructor(props) {
		super(props);
		this.state = { code: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.closeButtonRef = React.createRef();
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.removeBuilding(this.state.code);
		this.closeButtonRef.current.click();
		event.target.reset();
	}

	handleChange(event) {
		this.setState({ code: event.target.value });
	}

	render() {
		return (
			<div
				className="modal fade"
				id="removeBuildingModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="removeBuildingModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="removeBuildingModalLabel"
							>
								Remove Building
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
							<p>Modal body text goes here.</p>
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
								<div className="row justify-content-end">
									<button
										type="submit"
										className="btn btn-danger"
									>
										Remove
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

export default RemoveBuilding;