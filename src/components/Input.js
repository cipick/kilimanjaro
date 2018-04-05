import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Input extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const {key, size} = this.props;
		const user = this.store.appState.user;
		const locales = this.store.appState.locales;
		const appState = this.store.appState;
		this.setState({value: user[key]})

		const _onChange = ((element)=> {
			appState.updateUser(key, element.target.value)
		});

    return(
      <div className={`input-field col ${size}`}>
        <input id={key} value={this.state.value} onChange={_onChange} type="text" className="validate"/>
          <label htmlFor={key}>{locales[key]}</label>
        </div>
    )
	}
}
