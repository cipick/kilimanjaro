import React, { Component } from "react";
import RecipeIncredient from "./RecipeIncredient";

export default React.createClass({
  _onChange: function(event) {
    console.log(this);
    const value = event.target.value;
    const key = event.dataset.id;
    let newState = this.state;
    console.log(newState[newState.length - 1].title = value);
    this.setState(newState);
  },
  render: function() {
    const {incredients} = this.props;
    this.state = incredients;

    return (
      <div className="row">
        {(incredients.map((incredient)=> {
        return (
          <div onClick={this._onClick}>
            <RecipeIncredient incredient={incredient}/>
          </div>
          )}))}
          <RecipeIncredient/>
      </div>
    );
  }
});
