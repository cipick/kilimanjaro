import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DataWrapper from "./DataWrapper";

@DataWrapper
@inject("store")
@observer
export default class Banner extends Component {
	componentDidMount() {
		let elem = document.getElementById('parallax-home');
  	let instance = M.Parallax.init(elem);
	}

	render() {
		let banner = this.props.banner || {
			title: '',
			description: ''
		};

    return (
      <div id="index-banner" className={`parallax-container ${this.props.className}`}>
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">{banner.title}</h1>
            <div className="row center">
              <h5 className="header col s12 light">{banner.description}</h5>
            </div>
          </div>
        </div>
        <div className="parallax" id="parallax-home"><img src={banner.image} alt="Unsplashed background img 1" /></div>
      </div>
    );
  }
}
