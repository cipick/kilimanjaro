import React from 'react';

export default React.createClass({
  _onClick: function() {
    console.log('click', this);
    this.props.onClick();
  },
  render: function() {
    return (

      <div className="fixed-action-btn " onClick={this._onClick.bind(this)} style={{bottom: 50, right: 19}}>
        <a className="btn-floating btn-large gradient-45deg-light-blue-cyan gradient-shadow">
          <i className="material-icons">save</i>
        </a>
        <ul>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/css-helpers.html" className="btn-floating blue">
              <i className="material-icons">help_outline</i>
            </a>
          </li>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/cards-extended.html" className="btn-floating green">
              <i className="material-icons">widgets</i>
            </a>
          </li>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/app-calendar.html" className="btn-floating amber">
              <i className="material-icons">today</i>
            </a>
          </li>
          <li>
            <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/app-email.html" className="btn-floating red">
              <i className="material-icons">mail_outline</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
});
