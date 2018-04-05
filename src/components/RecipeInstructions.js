import React, { Component } from "react";
import RecipeInstruction from "./RecipeInstruction";

export default React.createClass({
  componentDidMount: function() {
    var elem0 = document.querySelector('.collapsible');
    var instance0 = M.Collapsible.init(elem0, {
      accordion: true
    });

    var elem1 = document.querySelector('.materialboxed');
    var instance1 = M.Materialbox.init(elem1);
  },
  render: function() {
    const instructions = this.props.instructions;

    return (
      <div className="instructions">
        <h3>{instructions.title}</h3>
        <ul className="collapsible popout">
          {instructions.steps.map((instruction, index)=>{
            console.log(instruction.title, index);
            return (<RecipeInstruction key={index} instruction={instruction} />);
          })}
        </ul>
      </div>
    );
  },
  renderInstrunction: function(instruction) {

  },
});
