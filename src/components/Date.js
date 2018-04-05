import React, { Component } from "react";
import { inject, observer } from "mobx-react";

export default class Date extends Component {
	render() {
		const store = this.store;
		return (
			<div className="fela-luo80z fela-u8ltux fela-1pjkygk">
				<div className="fela-1rti7r4">
					<div className="fela-af79t3">
						<span className="fela-135j40b">
							<svg className="fela-169bc1l fela-1mo23mm" width="11" height="16" viewBox="0 0 11 16" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-labelledby="a11y--id a11y--id-desc"><title id="a11y--id"></title><desc id="a11y--id-desc"></desc><path d="M3.136 7.997l6.9 6.067c.225.205.364.485.364.793 0 .631-.582 1.143-1.3 1.143-.35 0-.669-.122-.902-.32l-7.8-6.857A1.08 1.08 0 0 1 0 8c0-.328.153-.62.398-.827l7.8-6.858C8.433.121 8.75 0 9.1 0c.718 0 1.3.512 1.3 1.143 0 .347-.176.657-.453.867L3.136 7.997z" fill="#343434" fill-rule="evenodd"></path></svg>
							<span className="fela-ob1wlp">
								<span className="fela-4r1a9o">Menus for</span>
								<span>Apr 07</span>
								<span className="fela-po0ppq">-</span><span>Apr 13 </span>
							</span>
							<svg className="fela-xwo1b6 fela-1mo23mm" width="11" height="16" viewBox="0 0 11 16" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-labelledby="a11y--id a11y--id-desc"><title id="a11y--id"></title><desc id="a11y--id-desc"></desc><path d="M7.864 7.997l-6.9 6.067a1.074 1.074 0 0 0-.364.793C.6 15.488 1.182 16 1.9 16c.35 0 .669-.122.902-.32l7.8-6.857c.245-.209.398-.5.398-.823 0-.328-.153-.62-.398-.827L2.802.315A1.423 1.423 0 0 0 1.9 0C1.182 0 .6.512.6 1.143c0 .347.176.657.453.867l6.811 5.987z" fill="#343434" fill-rule="evenodd"></path></svg>
						</span>
					</div>
				</div>
			</div>
		);
	}
}
