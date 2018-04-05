import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Input from './Input';

@inject("store")
@observer
export default class Address extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
		this._onClick.bind(this);

	}
  _renderInput(key, size) {
		const appState = this.store.appState;
		const user = appState.user;
		const locales = appState.locales['address'];
		const _onChange = ((element)=> {
			appState.updateUser(key, element.target.value)
		});

    return(
      <div className={`input-field col ${size}`}>
        <input id={key} value={user[key] || undefined} onChange={_onChange} type="text" className="validate"/>
          <label htmlFor={key}>{locales[key]}</label>
        </div>
    )
  }
	onSubmit(form){
		return false;
	}
  _onClick() {
		return false;
  }

	render() {
		return (
      <div className="row">
      <form className="col" onSubmit={this.onSubmit}>
        <div className="row">
          {this._renderInput("first_name", "s12")}
          {this._renderInput("last_name", "s12")}
          {this._renderInput("email", "s12")}
        </div>
        <div className="row" style={this.store.appState.user.last_name? {display: "block"} : {display: "none"}}>
        {this._renderInput("county", "s12")}
        {this._renderInput("city", "s12")}
        {this._renderInput("street", "s12")}
        {this._renderInput("number", "s12")}
        {this._renderInput("block", "s12")}
        {this._renderInput("apartament", "s12")}
        </div>
        <button className="waves-effect waves-light btn" onClick={this._onClick.bind(this)}>Pasul urmator</button>
      </form>
    </div>
)}}
