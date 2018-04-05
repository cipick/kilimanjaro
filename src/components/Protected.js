import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import Register from "./Register";

export default function Protected(Children) {
	@inject("store")
	@observer
	class AuthenticatedComponent extends Component {
		constructor(props) {
			super(props);
			this.store = this.props.store.appState;
		}

		render() {
			const { authenticated, authenticating } = this.store;
			return (
				<div className="authComponent">

				</div>
			);
		}
	}
	return AuthenticatedComponent;
}
