import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RecipeThumb extends Component {
	render() {
		const {recipe, recipeId} = this.props;

    return ( recipe ?
      <div key={recipe.title} className={this.props.className}>
					<div className="fela-vul0m7">
						<Link to={`/recipes/${recipeId}`}>
						<div className="fela-65roq8" style={{background: `url("${recipe.image}")`}}></div>
						</Link>


						<div className="fela-13xlah4 fela-1nyyftg">
							<a href="/recipes/new" className="fela-5i41bu">
								<header className="fela-4q6xsb">
								<h3 className="fela-1amo4zy">{recipe.title}</h3>
								</header>
							</a>
							<p className="fela-1ou4ovv">{recipe.description}</p>
							<div className="fela-1v6rmad">
								<div className="fela-bq4rd3 fela-jkl6kg">
									<span className="fela-36rlri">
									<span>45 min</span></span></div>
									<div className="fela-7l2oeo fela-om16t1">
										<span className="fela-15qyh1k">
										<span className>Egg free</span><span className>
										<span className="fela-13jy121">•</span>Nut free</span><span className><span className="fela-13jy121">•</span>Spicy</span></span>
									</div>
								</div>
							</div>
						</div>
				</div>
			: null
    );
  }
}
