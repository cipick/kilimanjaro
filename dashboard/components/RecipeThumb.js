import React, { Component } from "react";

export default class RecipeThumb extends Component {
	render() {
		const {recipe} = this.props;

    return ( recipe ?
      <div key={recipe.title}>
					<div className="fela-vul0m7">
						<div className="fela-13xlah4 fela-1nyyftg">
							<a href="/recipes/hot-honey-barbecue-chicken-legs-5a8f0c6230006c2d416d8e02?locale=en-US" className="fela-5i41bu">
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
			: 'reteta mea'
    );
  }
}
