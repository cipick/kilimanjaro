import React, { Component } from "react";

export default React.createClass({
  componentDidMount: function() {
    const {instruction} = this.props;
    var elem1 = document.getElementById(`materialboxed-${instruction.id}`);
    var instance1 = M.Materialbox.init(elem1);
  },
  _onChange: function(event) {
    const {instruction} = this.props;
    console.log(instruction);
    M.toast({html: `Rezolvat: ${event.target.dataset.name}`})
    console.log('clckkkkk');
  },
  render: function() {
    const {instruction} = this.props;
    const i = instruction.description.toString().split('.');
    console.log(i, '--------');
    if(!i.length){return null};
    const steps = i;

    return (
      <li key={instruction.id}>
        <div className="collapsible-header">{instruction.id}. {instruction.title}</div>
        <div className="collapsible-body row">
            <div className="row">

            <img  src={instruction.image}
                  alt={instruction.title}
                  id={`materialboxed-${instruction.id}s`}
                  className="fela-xexnai col s12 materialboxed"
              />
            </div>

            <div className="row container">{steps.map((item, key)=>{
              if(!item) { return null; }
              return (
                <div className="row" key={key}>
                  <label>
                    <input onChange={this._onChange} data-name={item} type="checkbox" />
                    <span>{item}</span>
                  </label>
                </div>
              )
            })}</div>

          </div>
      </li>
    )
}})
