import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeThumbLoading from './RecipeThumbLoading';
import RecipeThumb from './RecipeThumb';

export default class RecipeThumbnails extends Component {
	onClick(){
		console.log('new lll');
	}
	render() {
		const {recipes} = this.props;

    return ( recipes.length > 0 ?
			<div className="row">
				{recipes.map((recipe, index)=>{
					return (
						<RecipeThumb recipeId={index} className="col s4" recipe={recipe}/>
					)
				})}
				<Link to={`/recipe/${recipes.length -1}/edit`}>
				<div onClick={this.onClick}><RecipeThumbLoading className="col s4"/></div></Link>
			</div> : null
    );
  }
}
