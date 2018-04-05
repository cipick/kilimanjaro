import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Route, Link } from "react-router-dom";
import ActiveLink from "./ui/ActiveLink";
import SideNav from "./SideNav";

@inject("store")
@observer
export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	authenticate(e) {
		if (e) e.preventDefault();
		this.props.store.authenticate();
	}

	render() {
		const { authenticated, authenticating } = this.store;
		return (
			<nav className="navbar blue lighten-3" role="navigation">
		    <div className="nav-wrapper transparent container">
		      <a id="logo-container" className="brand-logo"><ActiveLink activeOnlyWhenExact={true} to="/">Kilimanjaro</ActiveLink></a>
					<ul className="right hide-on-med-and-down white-text">
						<li><ActiveLink activeOnlyWhenExact={true} to="/recipes">Retete</ActiveLink></li>
						<li><ActiveLink activeOnlyWhenExact={true} to="/register">Cont nou</ActiveLink></li>
			    </ul>
					<SideNav />
		    </div>
		  </nav>
		);
	}
}
