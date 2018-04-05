import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import TopNav from './TopNav';
import Footer from './Footer';
import NewRecipe from './NewRecipe';
import RecipeThumb from './RecipeThumb';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import EcommerceOffer from './EcommerceOffer';
import EcommerceProduct from './EcommerceProduct';
import FLoatingActionButton from './FLoatingActionButton';


@inject("store")
@observer
export default class Home extends Component {
  render() {
    const recipe = this.props.store.appState.recipes[0];

    return (
      <div className="layout-semi-dark1">
        <div id="main">
          <div className="wrapper container" style={{width: '200px'}}>
            <div className="row">
              <div className="col s6">
                <RecipeThumb recipe={recipe}/>
              </div>
              <div className="col s6">
                <NewRecipe recipe={recipe}/>
              </div>
            </div>
            <FLoatingActionButton />
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
