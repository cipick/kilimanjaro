import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

@withRouter
@inject("store")
@observer
export default class HowItWorks extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

  render(){
    const articles = this.store.locales.articles;

	  return (
	    <div id="how-it-works" className="white container">
	      {articles.map((article, index)=>{
	        return( index % 2 === 0 ?
	          this._renderItem(`article-${index}`, article) :
	          this._renderItem2(`article-${index}`, article)
	        );
	      })}
	    </div>
		)
	}

  _renderItem(key, item, onRight){
    return(
      <div className="row" key={key}>
        <div className="col s12 l6">
          <img src={item.image} className="img-fluid section-image" alt="customize your plan"  />
        </div>
				<div className="col s12 l6 text-xs-center text-lg-left">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className="content-toggle-link">How do I create a plan?</span>
        </div>
      </div>
    );
  }
  _renderItem2(key, item, onRight){
    return(
      <div className="row" key={key}>
				<div className="col s12 l6 text-xs-center text-lg-left">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className="content-toggle-link">How do I create a plan?</span>
        </div>
				<div className="col s12 l6">
          <img src={item.image} className="img-fluid section-image" alt="customize your plan"  />
        </div>
      </div>
    );
  }
}
