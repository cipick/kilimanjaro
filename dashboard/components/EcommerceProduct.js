import React from 'react';

export default React.createClass({
  render: function() {
    return (

      <div id="ecommerce-product">
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-content  center">
                <h6 className="card-title font-weight-400 mb-0">Apple Watch</h6>
                <img src="./Materialize - Material Design Admin Template_files/watch.png" />
                <p>
                  <b>The Apple Watch</b>
                </p>
                <p>One day only exclusive sale on our marketplace</p>
              </div>
              <div className="card-action border-non center">
                <a className="waves-effect waves-light btn gradient-45deg-light-blue-cyan box-shadow">$ 999/-</a>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align">Music</span>
                <img src="./Materialize - Material Design Admin Template_files/headphones-2.png" />
              </div>
              <div className="card-action pt-0">
                <p className>Default Quality</p>
                <div className="chip">
                  192kb
                  <i className="close material-icons">close</i>
                </div>
                <div className="chip">
                  320kb
                  <i className="close material-icons">close</i>
                </div>
              </div>
              <div className="card-action pt-0">
                <p className>Save Video Quality</p>
                <div className="switch">
                  <label>
                    Off
                    <input type="checkbox" />
                    <span className="lever" />
                    On
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card">
              <div className="card-content center">
                <h6 className="card-title font-weight-400 mb-0">iPhone</h6>
                <img src="./Materialize - Material Design Admin Template_files/iphonec.png" />
                <p>
                  <b>The Apple iPhone X</b>
                </p>
                <p>One day only exclusive sale on our marketplace</p>
              </div>
              <div className="card-action border-non center">
                <a className="waves-effect waves-light btn gradient-45deg-red-pink box-shadow">$ 299/-</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
