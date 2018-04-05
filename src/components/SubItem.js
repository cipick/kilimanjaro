import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import Banner from "./Banner";
import Recipe from "./Recipe";

import DataWrapper from "./DataWrapper";
import RecipeNew from "./RecipeNew";

@DataWrapper
@observer
export default class Subitem extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	_getIdFromUrl(x){
		return this.props.location.pathname.split("/").reverse()[x];
	}

	render() {
		const recipeId = this._getIdFromUrl(0);
		const recipeIds = this._getIdFromUrl(1);

		console.log('asd', this.props.location);

		if(recipeId === "new") return (<RecipeNew/>);
		if(recipeId === "edit") return (<RecipeNew receipe={receipe} recipeId={recipeId}/>);

		const { recipes } = this.store.appState;
		let recipe = recipes[recipeId];

		return (
			<div className="receipe">
				<Banner banner={{image: recipe.image}}/>
				<Link to="/">← Back to Posts</Link>
				<Recipe recipe={recipe} recipeId={recipeId}/>
			</div>
		);
	}
}
