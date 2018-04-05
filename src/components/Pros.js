import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DataWrapper from "./DataWrapper";

@DataWrapper
@inject("store")
@observer
export default class Pros extends Component {
	render() {
    const pros = this.props.store.appState.locales.register.pros.map((number, index) =>{
    console.log(number);
    return(
          <li key={index}>
            {number.title}
          </li>
        );});

    return(pros);
    return null;
	}
}
