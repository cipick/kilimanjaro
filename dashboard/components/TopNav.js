import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="navbar-fixed">
        <nav className="navbar-color">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down sideNav-lock">
              <i className="material-icons">search</i>
              <input type="text" name="Search" className="header-search-input z-depth-2" placeholder="Explore Materialize" />
            </div>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="javascript:void(0);" className="waves-effect waves-block waves-light translation-button" data-activates="translation-dropdown">
                  <span className="flag-icon flag-icon-gb" />
                </a><ul id="translation-dropdown" className="dropdown-content">
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-1">
                      <i className="flag-icon flag-icon-gb" /> English</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-1">
                      <i className="flag-icon flag-icon-fr" /> French</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-1">
                      <i className="flag-icon flag-icon-cn" /> Chinese</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-1">
                      <i className="flag-icon flag-icon-de" /> German</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen">
                  <i className="material-icons">settings_overscan</i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="waves-effect waves-block waves-light notification-button" data-activates="notifications-dropdown">
                  <i className="material-icons">notifications_none
                    <small className="notification-badge">5</small>
                  </i>
                </a><ul id="notifications-dropdown" className="dropdown-content">
                  <li>
                    <h6>NOTIFICATIONS
                      <span className="new badge">5</span>
                    </h6>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-2">
                      <span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                    <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-2">
                      <span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                    <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">3 days ago</time>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-2">
                      <span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                    <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">4 days ago</time>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-2">
                      <span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                    <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">6 days ago</time>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#!" className="grey-text text-darken-2">
                      <span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                    <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">1 week ago</time>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);" className="waves-effect waves-block waves-light profile-button" data-activates="profile-dropdown">
                  <span className="avatar-status avatar-online">
                    <img src="./Materialize - Material Design Admin Template_files/avatar-7.png" alt="avatar" />
                    <i />
                  </span>
                </a><ul id="profile-dropdown" className="dropdown-content">
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" className="grey-text text-darken-1">
                      <i className="material-icons">face</i> Profile</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" className="grey-text text-darken-1">
                      <i className="material-icons">settings</i> Settings</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" className="grey-text text-darken-1">
                      <i className="material-icons">live_help</i> Help</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" className="grey-text text-darken-1">
                      <i className="material-icons">lock_outline</i> Lock</a>
                  </li>
                  <li>
                    <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" className="grey-text text-darken-1">
                      <i className="material-icons">keyboard_tab</i> Logout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://pixinvent.com/materialize-material-design-admin-template/html/semi-dark-menu/#" data-activates="chat-out" className="waves-effect waves-block waves-light chat-collapse">
                  <i className="material-icons">format_indent_increase</i>
                </a>
              </li>
            </ul>
            {/* translation-button */}
            {/* notifications-dropdown */}
            {/* profile-dropdown */}
          </div>
        </nav>
      </div>
    );
  }
});
