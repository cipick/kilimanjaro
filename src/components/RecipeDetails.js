import React, { Component } from "react";
import RecipeButtons from "./RecipeButtons";

export default class RecipeThumb extends Component {
	render() {
		const {title, subtitle, id} = this.props.recipe;

    return (
			<div>
				<div className="fela-9sirm5">
					<div className="fela-1awe7u3">
						<h1 className="fela-y6xryt fela-11f55ha">{title}</h1>
						<h2 className="fela-gtjexx fela-1k6y94c">{subtitle}</h2>
						<div className="fela-8xd6nf" />
					</div>
					<RecipeButtons/>
				</div>
			</div>
		);
  }
}
