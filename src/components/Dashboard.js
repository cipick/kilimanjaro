import React from "react";

import TopNav from '../../dashboard/components/TopNav';
import Footer from '../../dashboard/components/Footer';
import NewRecipe from '../../dashboard/components/NewRecipe';
import LeftSidebar from '../../dashboard/components/LeftSidebar';
import RightSidebar from '../../dashboard/components/RightSidebar';
import EcommerceOffer from '../../dashboard/components/EcommerceOffer';
import EcommerceProduct from '../../dashboard/components/EcommerceProduct';
import FLoatingActionButton from '../../dashboard/components/FLoatingActionButton';

export default React.createClass({
  render: function() {
    return (
      <div className="layout-semi-dark">
        <header id="header" className="page-topbar">
          <TopNav />
        </header>
        <div id="main">
          <div className="wrapper">
            <LeftSidebar />
            <div className="container">
              <EcommerceProduct/>
              <EcommerceOffer/>
            </div>
            <FLoatingActionButton />
            <RightSidebar />
          </div>
          <NewRecipe/>
          cipick
          <Footer/>
        </div>
      </div>
    );
  }
});
