import React, { Component } from "react";
import LoadingSection from "./LoadingSection";
import RecipeDetails from "./RecipeDetails";
import RecipeDescription from "./RecipeDescription";
import RecipeIncredients from "./RecipeIncredients";
import RecipeInstructions from "./RecipeInstructions";

export default React.createClass({
  render: function() {
    const {recipe, recipeId} = this.props;

    return (
      <div className="fela-fbwvw7 container">
        <div className="fela-1er1790">
          <div className="fela-aqung0">
            <RecipeDetails recipe={recipe}/>
            <RecipeDescription recipe={recipe}/>
            <RecipeIncredients incredients={recipe.incredients} />
    				<RecipeInstructions instructions={recipe.instructions} />
    				<a href={(`/recipe/${recipeId}/edit`)} className="btn-floating btn-large waves-effect waves-light red" style={{position: "fixed", right: "100px", bottom: "80px"}}><i className="material-icons">add</i></a>
          </div>
          <LoadingSection />
        </div>
      </div>
    );
  }
});
