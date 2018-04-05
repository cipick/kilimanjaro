import React, { Component } from "react";
import RecipeIncredient from "./RecipeIncredient";

export default React.createClass({
  _renderIncredient: function(incredient) {
    return(
      <div className="col s12 m6">
        <div className="card-panel lighten-5">
          <div className="row valign-wrapper" >
            <div className="fela-zrr6hn fela-coh30y">
              <img className="circle responsive-img" src={incredient.image} />
            </div>
            <div className="fela-1nnptk offset-m1">
              <p className="fela-2htk9c incredient-quantity">{incredient.quantity}</p>
              <p className="fela-c30jy9">{incredient.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    const {incredients} = this.props;

    return (
    <div className="recipe-incredients">
      <h3>{incredients.title}</h3>
      <RecipeIncredient incredient={incredients[0]}/>
      <div className="row">
        <div className="col s12">
          {incredients.list.map((incredient) => {
              return this._renderIncredient(incredient);
            })}
        </div>
      </div>
    </div>
    );
  }
});
