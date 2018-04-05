import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Banner from './Banner';
import Date from './Date';
import RecipeThumbnails from './RecipeThumbnails';

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store.appState;

		console.log('store', store.recipes);

		return (
			<div className="homep">
				<Banner banner={{
					image: "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_website/us/cms/lentil/delicious/HF-Main-1023x650-Green.jpg"
				}}/>
				<div className="container">
					<Date/>
					<RecipeThumbnails recipes={store.recipes}/>
				</div>
			</div>
		);
	}
}
