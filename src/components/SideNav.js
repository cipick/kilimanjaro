import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import ActiveLink from "./ui/ActiveLink";
import DataWrapper from "./DataWrapper";
import Protected from "./Protected";

@DataWrapper
@observer
export default class Subitem extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}
	componentDidMount(){
		var elem = document.getElementById('nav-mobile');
		window.M.Sidenav.init(elem);
	}
	render() {
		return (
			<span>
			<ul id="nav-mobile" className="sidenav">
				<li>
					<div className="user-view">
						<div className="background orange">
						</div>
						<a href="#name"><span className="white-text name">{this.store.user.first_name} {this.store.user.last_name}</span></a>
						<a href="#email"><span className="white-text email">{this.store.user.email}</span></a>
					</div>
				</li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register"><i className="material-icons">group_add</i>Cont nou</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/plans"><i className="material-icons">collections</i>Abonamente</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/recipes"><i className="material-icons">collections</i>Retete</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register"><i className="material-icons">help</i>Cum functioneaza?</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/email"><i className="material-icons">email</i>Aboneaza-te</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/settings"><i className="material-icons">settings</i>Setari</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/exit_to_app"><i className="material-icons">close</i>Inchide aplicatia</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register"></ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register">Asteptam pareri...</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register">Vin</ActiveLink></li>
				<li><ActiveLink activeOnlyWhenExact={true} to="/register">Ustensile</ActiveLink></li>
			</ul>
			<a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</span>
		);
	}
}
