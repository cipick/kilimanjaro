import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import TopBar from "./TopBar";

@withRouter
@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		return (
			<div className="wrapper">
				{/*<DevTools />*/}
				<TopBar />

				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("./Home")} />
					)}
				/>
				<Route
					exact
					path="/plans"
					render={props => (
						<LazyRoute {...props} component={import("./Plans")} />
					)}
				/>
				<Route
					exact
					path="/how-it-works"
					render={props => (
						<LazyRoute {...props} component={import("./HowItWorks")} />
					)}
				/>
				<Route
					exact
					path="/recipes/:id"
					render={props => (
						<LazyRoute {...props} component={import("./SubItem")} />
					)}
				/>
				<Route
					exact
					path="/recipe/:id/edit"
					render={props => (
						<LazyRoute {...props} component={import("./RecipeNew")} />
					)}
				/>
				<Route
					exact
					path="/login"
					render={props => (
						<LazyRoute {...props} component={import("./Login")} />
					)}
				/>
				<Route
					exact
					path="/address"
					render={props => (
						<LazyRoute {...props} component={import("./Address")} />
					)}
				/>
				<Route
					exact
					path="/register"
					render={props => (
						<LazyRoute {...props} component={import("./Register")} />
					)}
				/>
				<Route
					exact
					path="/dashboard"
					render={props => (
						<LazyRoute {...props} component={import("../../dashboard/components/Home")} />
					)}
				/>
			</div>
		);
	}
}
