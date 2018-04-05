import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import Register from "./Register";

@inject("store")
@observer
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		const { register } = store.appState;
		return (<Register register={register}/>);
	}
}
