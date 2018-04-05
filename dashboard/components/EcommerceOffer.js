import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div id="ecommerce-offer">
        <div className="row">
          <div className="col s12 m3">
            <div className="card gradient-shadow gradient-45deg-light-blue-cyan border-radius-3">
              <div className="card-content center">
                <img src="./Materialize - Material Design Admin Template_files/apple-watch.png" className="width-40 border-round z-depth-5" />
                <h5 className="white-text lighten-4">50% Off</h5>
                <p className="white-text lighten-4">On apple watch</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card gradient-shadow gradient-45deg-red-pink border-radius-3">
              <div className="card-content center">
                <img src="./Materialize - Material Design Admin Template_files/printer.png" className="width-40 border-round z-depth-5" />
                <h5 className="white-text lighten-4">20% Off</h5>
                <p className="white-text lighten-4">On Canon Printer</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card gradient-shadow gradient-45deg-amber-amber border-radius-3">
              <div className="card-content center">
                <img src="./Materialize - Material Design Admin Template_files/laptop.png" className="width-40 border-round z-depth-5" />
                <h5 className="white-text lighten-4">40% Off</h5>
                <p className="white-text lighten-4">On apple macbook</p>
              </div>
            </div>
          </div>
          <div className="col s12 m3">
            <div className="card gradient-shadow gradient-45deg-green-teal border-radius-3">
              <div className="card-content center">
                <img src="./Materialize - Material Design Admin Template_files/bowling.png" className="width-40 border-round z-depth-5" />
                <h5 className="white-text lighten-4">60% Off</h5>
                <p className="white-text lighten-4">On any game</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
