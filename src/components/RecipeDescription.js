import React, { Component } from "react";

export default React.createClass({
  render: function() {
    const recipe = this.props.recipe;

    return (
      <div className="fela-1nezeyg fela-9sirm5">
        <div className="fela-1wb3th7 fela-1awe7u3">
          <div className="fela-6ieyue fela-tfeur6">
            <div className="fela-txpp0u" />
            <div className="fela-1r6j2bx"><span data-translation-id="recipe-detail.read-more">Read more</span></div>
            <div className="fela-zwi0a0 fela-1wtg4wo">
              <span>
                <p>{recipe.description}</p>
              </span>
            </div>
            <div className="fela-9410q1 fela-1wtg4wo"><span className="fela-v2ydqh"><span>{recipe.tagsLabel}</span>:</span>{recipe.tags}</div>
            <div className="fela-9410q1 fela-1wtg4wo"><span className="fela-v2ydqh"><span>{recipe.allergensLabel}</span>:</span><span className><span className="fela-36rlri">{recipe.allergens}</span></span></div>
          </div>
        </div>
        <div className="fela-1nwu1vk fela-wf7w8b">
          <div className="fela-tfeur6">
            <div className="fela-1wtg4wo">
              <div className="fela-1slhjvb">
                <div className="fela-19qpnoj">
                  <div className="fela-h97t31">
                    <span data-translation-id="recipe-detail.preparation-time">{recipe.preparationTimeLabel}: </span>

                    {(recipe.preparationTime ?
                      <div className="fela-107ja4p">{recipe.preparationTime}</div> :
                      <div className="input-field inline">
                        <input id="preparationTime" type="number" placeholder="... minute" className="validate" />
                        <span className="helper-text">Salveaza</span>
                      </div>
                    )}

                  </div>
                </div>


                <div className="fela-19qpnoj">
                  <div className="fela-h97t31"><span data-translation-id="recipe-detail.cooking-difficulty">{recipe.cookingDificultyLabel}: </span></div>

                  {(recipe.cookingDificulty ?
                    <div className="fela-107ja4p"><span data-translation-id="recipe-detail.level-number">{recipe.cookingDificulty}</span></div> :
                    <div className="input-field inline">
                      <input id="cookingDificulty" type="number" placeholder="Level ..." className="validate" />
                      <span className="helper-text">Salveaza</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
