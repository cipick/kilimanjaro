import React, { Component } from "react";

export default React.createClass({
  componentDidMount: function() {
    this.state = null;
  },
  onKeyUp: function(ev) {
    if(+ev.keyCode === +'13'){
      let newState = {title: ev.target.value};
      this.setState(newState);
      console.log('enter', newState);
    }
  },
  render: function() {
    const incredient = this.props.incredient || {title: ''};
    const state = this.state || incredient;

    return (
      <div key={incredient.title} className="chip">
        {incredient.image ? (<img src={incredient.image} alt="Contact Person" />) :  null}
        {state.title ? (<span>{state.title} <i className="close material-icons">close</i></span>) : (<div className="input-field inline"><input className="validate"  value={undefined} onKeyUp={this.onKeyUp}/></div>) }
      </div>
    );
  }
});
