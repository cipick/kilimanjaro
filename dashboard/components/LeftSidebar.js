import React from "react";

export default React.createClass({
  render: function() {
    return (
      <aside id="left-sidebar-nav" className="nav-expanded nav-lock nav-collapsible">
        <div className="brand-sidebar">
          <h1 className="logo-wrapper">
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/index.html" className="brand-logo darken-1">
              <span className="logo-text hide-on-med-and-down">Materialize</span>
            </a>
          </h1>
        </div>
        <ul id="slide-out" className="side-nav fixed leftside-navigation ps-container ps-active-y" style={{transform: 'translateX(0%)'}}>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/changelogs.html">
              <i className="material-icons">track_changes</i>
              <span className="nav-text">Changelogs</span>
            </a>
          </li>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/documentation" target="_blank">
              <i className="material-icons">import_contacts</i>
              <span className="nav-text">Documentation</span>
            </a>
          </li>
          <li>
            <a href="https://pixinvent.ticksy.com/" target="_blank">
              <i className="material-icons">help_outline</i>
              <span className="nav-text">Support</span>
            </a>
          </li>
          <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 3}}><div className="ps-scrollbar-x" style={{left: 0, width: 0}} /></div><div className="ps-scrollbar-y-rail" style={{top: 0, height: 678, right: 3}}><div className="ps-scrollbar-y" style={{top: 0, height: 390}} /></div></ul>
        <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only gradient-45deg-light-blue-cyan gradient-shadow">
          <i className="material-icons">menu</i>
        </a>
      </aside>
    );
  }
});
