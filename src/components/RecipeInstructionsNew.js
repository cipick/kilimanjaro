import React, { Component } from "react";

export default React.createClass({
  _onChangeImage: function(element) {
    const value = element.target.value;
    const key = element.target.dataset.index;
    let newState = this.state;
    newState[key].image = value;
    this.setState(newState);
  },
  _onChangeTitle: function(element) {
    const value = element.target.value;
    const key = element.target.dataset.index;
    let newState = this.state;
    newState[key].title = value;
    this.setState(newState);
  },
  _onChangeDescription: function(element) {
    const value = element.target.value;
    const key = element.target.dataset.index;
    let newState = this.state;
    newState[key].description = value;
    this.setState(newState);
  },
  _onClick: function(element) {
    const key = element.target.dataset.index;
    console.log('key', key);
    let newState = this.state.filter(function(value, arrIndex) {
      console.log('s', arrIndex, +key !== +arrIndex);
      if(+key !== +arrIndex) {return value;}
    });

    console.log('newState', newState);

    this.setState(newState);
  },
  render: function(incredient) {
    const {steps} = this.props || [];

    this.state = steps;

    return(
    <div className="row">
      {(steps.map((item, index)=> {
      return (
        <div key={index} className="row">
        <div className="col s6">
          <img className="materialboxed" width="100%" src={item.image} />
        </div>
        <div className="col s6">
          <div className="input-field col s12">
            Image: <input type="text" value={this.state[index].image} data-index={index} onChange={this._onChangeImage.bind(this)} id="autocomplete-inputs" className="autocomplete" />
            Title: <input type="text" value={item.title} data-index={index} onChange={this._onChangeTitle.bind(this)} id="autocomplete-input" className="autocomplete" />
            Description: <textarea data-index={index} onChange={this._onChangeDescription.bind(this)} id="textarea1" value={item.description} className="materialize-textarea"></textarea>
          </div>
          <a className="waves-effect waves-light btn right" data-index={index} onClick={this._onClick.bind(this)}><i className="material-icons right">close</i>Remove</a>

        </div>
        </div>
      )}))}
  </div>
)
}})
