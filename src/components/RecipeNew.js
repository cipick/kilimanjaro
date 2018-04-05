import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Banner from "./Banner";
import FloatingActionButton from "./FloatingActionButton";
import RecipeInstructionsNew from "./RecipeInstructionsNew";
import RecipeIncredientsNew from "./RecipeIncredientsNew";

@inject("store")
@observer
export default class RecipeNew extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;

    const recipeId = this.props.match.params.id || 0;

    this.state = this.store.recipes[0];
  }

  componentDidMount(){
		var elem = document.getElementById('nav-mobile');
		window.M.Sidenav.init(elem);

    var elem = document.querySelector('.materialboxed');
    var instance = M.Materialbox.init(elem);
	}

  _onChange(element) {
    const {key} = element.target.dataset;
    const value = element.target.value;
    let newState = this.state;

    newState[key] = value;
    this.setState(newState);
  }

  _renderInput(key, value) {
    const _onChange = this._onChange.bind(this);
    if(key === "id"){
      return null;
    }

    if(key === "image"){
      return (<img className="materialized" src={value.image} key={key}/>)
    }
    if(key === "instructions") {
      if(value.steps){
        return (<div key={key}>
          <div className="row">
          {value.title}
          </div>
            <RecipeInstructionsNew steps={value.steps}/>
          </div>)
      }
    }
    if(key === "incredients") {
      if(value.list){
        return (
          <div>
            <div className="row">
            {value.title}
            </div>
            <RecipeIncredientsNew incredients={value.list} />
          </div>
        )
      }
    }

    return (
      <div key={key} className="row">
        <div className="col s12">
          <div className="input-field">
            <input id={key} data-key={key} type="text" value={value} onChange={_onChange} className="validate" />
            <span className="helper-text">{key}</span>
          </div>
        </div>
      </div>
    )
  }
  _onClick() {
    this.store.putRecipe(this.state);
  }
  render() {
    const recipe = this.state;
    let keys = [];
    let values = [];
    for(var k in recipe) keys.push(k);
    for(var k in recipe) values.push(recipe[k]);

    return (
        <form>
        <Banner className="white" banner={{title: `Editeaza reteta ${this.state.id}`, image: this.state.image, textBackground: 'white'}} />
        <div className="container">
          {keys.map((key,index)=> this._renderInput(key, values[index]))}
          <Link to={'/'} >
            <FloatingActionButton icon="save" onClick={this._onClick.bind(this)}/>
          </Link>
          </div>
        </form>
    );
  }
}
