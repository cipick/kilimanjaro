import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Card from "./Card";

@inject("store")
@observer
export default class Plans extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		const plans = store.appState.plans;

		return (
			<main className="page plans">
				<div className="container">
					<div className="row">
						<div className="plan col m4"><Card plan={plans[0]}/></div>
						<div className="plan col m4"><Card plan={plans[1]}/></div>
						<div className="plan col m4"><Card plan={plans[2]}/></div>
					</div>
				</div>
			</main>
		)
	}
}
