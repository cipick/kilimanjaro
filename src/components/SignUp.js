import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DataWrapper from "./DataWrapper";
import { Link } from "react-router-dom";

@DataWrapper
@inject("store")
@observer
export default class Banner extends Component {
	componentDidMount() {
		let elem = document.getElementById('parallax-home');
  	let instance = M.Parallax.init(elem);
	}
	_onChange(input){
		this.setState('email', input.target.value);
	}
	_renderEmail() {
		const email = (this.store ? (this.store.user.email || "") : "");
		console.log('render email', this);

		return (
			 <div className="input-field col s12">
				 <input id="icon_prefix2" value={undefined} onChange={this._onChange} placeholder={`Your email: ${email}`}/>
				 <Link to={"/"} >Continue with email</Link>
			 </div>
		);
	}
	render() {
		this.state = register;

		let register = this.props.register || {
			title: 'asfdasfd',
			description: 'asdfafs',
			facebookLabel: 'Continue with facebook'
		};

    return (
			<section className="fela-1y4r2as">
				 <header className="fela-1u7qptv">
						<h1 className="fela-11f55ha">{register.title}</h1>
						<div className="fela-k4io2m">
							 <div data-translation-id="funnel.register.signup.description">{register.description}</div>
						</div>
				 </header>
				 <section className="fela-1088tkd">
						<div className="fela-1vac6gd">
							 <div className="fela-rqdcjk">
									<div className="fela-19dz0j4">
									<img style={{maxWidth: "100%"}} src="https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto/v1/hellofresh_website/us/cms/Sushi/Products/classic-box/Classic_topview-500x392.png" />

										 <div data-translation-id="funnel.register.signup.imageText"></div>
									</div>
							 </div>
							 <div className="fela-rqdcjk">
									<div id="hf-registration-steps">
										 <div id="hf-registration-first-form">
												<div id="hf-registration-facebook-container">
													 <div id="hf-registration-with-facebook">



												 </div>
												</div>
												<div className="row">
												 <a className="waves-effect waves-light btn fela-1ejfpw2 col s12"><i className="material-icons right">send</i>{register.facebookLabel}</a>
												</div>


												 <div className="fela-1gczxw4 row"><span className="fela-7gwd2j col s12" data-translation-id="funnel.register.signup.or.label">or</span></div>
												<div className="row">
												 {this._renderEmail()}

											 </div>
											 <p className="fela-ri7avk">{register.footnote}</p>
										 </div>
									</div>
							 </div>
						</div>
				 </section>
			</section>
    );
  }
}
