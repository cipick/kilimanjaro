import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

import FloatingActionButton from "./FloatingActionButton";

@inject("store")
@observer
export default class NewRecipe extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
    this.recipe = this.store.recipes[0];
  }

  componentDidMount(){
		var elem = document.getElementById('nav-mobile');
		window.M.Sidenav.init(elem);
	}

  _onChange(element) {
    this.store.updateRecipe(this.recipe.id, element.target.dataset.key, element.target.value);
  }

  _renderInput(key, value) {
    const _onChange = this._onChange.bind(this);
    const edit = true;
    key = 'a';
    value = this.recipe[key];
    console.log('store-re', this.recipe.id);
    return (
      <div key={key} className="row">
        <div className="col s12">
          <div className="input-field">
            <input id={key} data-key={key} data-id={this.recipe.id} type="text" onChange={_onChange} className="validate" />
            <label htmlFor={key}>{key}</label>
            {
              edit ? <span className="helper-text">was {value}</span> : null
            }

          </div>
        </div>
      </div>
    )
  }
  render() {
    const recipe = this.recipe;

    let keys = [];
    let values = [];
    for(var k in recipe) keys.push(k);
    for(var k in recipe) values.push(recipe[k]);

    return (
        <form className="container">
          {keys.map((key)=> this._renderInput(key))}
          <Redirect to="/your-new-location" push />

          <FloatingActionButton/>
        </form>
    );
  }
}
