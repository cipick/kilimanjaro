import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DataWrapper from "./DataWrapper";
import Banner from "./Banner";
import SignUp from "./SignUp";

@DataWrapper
@observer
export default class Register extends Component {
	_onChange(input){

		const email = this.store ? this.store.user.email || "" : "";

		console.log(email, "email");

		this.store = this.props.store.appState;
		this.store.updateUser('email', input.target.value);
		console.log();
		console.log();

	}
	render() {
		const register = {
			title: "Register title",
			description: "Delicious recipes and pre-measured ingredients delivered straight to your door",
			facebookLabel: "Continue with Facebook",
			orLabel: "Register title",
			footnote: "We may use your email for updates and tips on HelloFresh products and services. You can unsubscribe for free at any time."
		}
    return(
      <div className="fela-18pu5j7s">
				<Banner banner={{image: "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_80,w_auto:100:1280/v1/hellofresh_s3/image/5a8f0e4cae08b52d6a551a52-32681fad.jpg"}} />
				<SignUp register={register}/>
         <section className="fela-jcytyj">
            <div className="fela-1vac6gd">
               <div className="fela-19gp4gb">
                  <div className="fela-w38od2">
                     <div className="fela-1vac6gd">
                        <div className="fela-12oe0lg">
                           <svg className="fela-1rtnddl" width="23.958333333333332" height="25" viewBox="0 0 23 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-labelledby="a11y--id a11y--id-desc">
                              <title id="a11y--id"></title>
                              <desc id="a11y--id-desc"></desc>
                              <g fill="none" fill-rule="evenodd">
                                 <path d="M-1 0h24v24H-1z"></path>
                                 <path d="M12.462 1.935V.923A.923.923 0 0 0 11.538 0h-.923a.923.923 0 0 0-.923.923v1.012C4.23 2.617 0 7.275 0 12.923 0 19.041 4.96 24 11.077 24c6.118 0 11.077-4.96 11.077-11.077 0-5.648-4.229-10.306-9.692-10.988zm-1.385 20.911c-5.472 0-9.923-4.451-9.923-9.923S5.605 3 11.077 3 21 7.451 21 12.923s-4.451 9.923-9.923 9.923zm1.73-9.923a1.73 1.73 0 0 1-1.038 1.585v.954a.693.693 0 0 1-1.384 0v-.954a1.73 1.73 0 0 1 0-3.17V5.77a.693.693 0 0 1 1.384 0v5.57a1.73 1.73 0 0 1 1.039 1.584zM18.14 2.811l.979-.979 2.28 2.28-.98.979-.57-.57-1.139-1.14-.57-.57z" fill="#343434"></path>
                              </g>
                           </svg>
                        </div>
                        <div className="fela-142acw7">
                           <h4 className="fela-ikn578"><strong><span data-translation-id="funnel.register.pros.0.title">Save Time</span></strong></h4>
                           <p className="fela-9l9b0c"><span data-translation-id="funnel.register.pros.0.text">Let us do the planning, shopping, and delivering, so you can do the fun part: cooking! And eating, of course.</span></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="fela-19gp4gb">
                  <div className="fela-w38od2">
                     <div className="fela-1vac6gd">
                        <div className="fela-12oe0lg">
                           <svg className="fela-1rtnddl" width="30" height="30" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-labelledby="a11y--id a11y--id-desc">
                              <title id="a11y--id"></title>
                              <desc id="a11y--id-desc"></desc>
                              <g fill="none" fill-rule="evenodd">
                                 <g fill="#343434">
                                    <path d="M22.152 20.258H1.708c-.172 0-.3-.086-.387-.258L.12 17.38a.508.508 0 0 1 .042-.43c.086-.128.215-.214.344-.214h22.85c.129 0 .3.086.344.215.042.128.085.257.042.429L22.54 20c-.086.172-.215.258-.387.258zm-20.187-.86h19.887l.816-1.76H1.192l.773 1.76z"></path>
                                    <path d="M21.98 17.595c-.257 0-.429-.172-.429-.43 0-5.283-4.295-9.62-9.621-9.62a9.605 9.605 0 0 0-9.621 9.62c0 .258-.172.43-.43.43-.257 0-.429-.172-.429-.43 0-5.798 4.682-10.48 10.48-10.48s10.48 4.682 10.48 10.48a.43.43 0 0 1-.43.43z"></path>
                                    <path d="M4.757 13.17a.61.61 0 0 1-.257-.085c-.215-.129-.258-.387-.13-.601 1.375-1.976 3.35-3.436 5.67-4.124a.381.381 0 0 1 .516.301.381.381 0 0 1-.301.515 9.809 9.809 0 0 0-5.197 3.78c-.043.172-.172.215-.3.215zM11.93 7.544a1.742 1.742 0 0 1-1.761-1.76c0-.989.773-1.762 1.761-1.762.988 0 1.761.773 1.761 1.761 0 .988-.773 1.761-1.761 1.761zm0-2.663a.88.88 0 0 0-.902.902.88.88 0 0 0 .902.902.88.88 0 0 0 .902-.902.88.88 0 0 0-.902-.902zM3.957 6.877a.492.492 0 0 1-.348-.838c.6-.601.353-1.33-.099-2.471-.42-1.061-.944-2.381.099-3.424a.492.492 0 0 1 .694.695c-.557.557-.316 1.262.121 2.366.431 1.087.968 2.44-.12 3.528a.493.493 0 0 1-.347.144zM6.904 4.912a.49.49 0 0 1-.272-.9c.4-.267.379-.468-.139-1.34-.399-.668-1.064-1.788.138-2.59A.491.491 0 0 1 7.175.9c-.344.23-.37.374.162 1.27.407.684 1.087 1.827-.161 2.66a.488.488 0 0 1-.272.082z"></path>
                                 </g>
                                 <path d="M0-2h24v24H0z"></path>
                              </g>
                           </svg>
                        </div>
                        <div className="fela-142acw7">
                           <h4 className="fela-ikn578"><strong><span data-translation-id="funnel.register.pros.1.title">Get Inspired</span></strong></h4>
                           <p className="fela-9l9b0c"><span data-translation-id="funnel.register.pros.1.text">Each week, our chefs curate 13 deliciously simple recipes featuring a variety of ingredients and flavors.</span></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="fela-19gp4gb">
                  <div className="fela-w38od2">
                     <div className="fela-1vac6gd">
                        <div className="fela-12oe0lg">
                           <svg className="fela-1rtnddl" width="25" height="25" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" aria-labelledby="a11y--id a11y--id-desc">
                              <title id="a11y--id"></title>
                              <desc id="a11y--id-desc"></desc>
                              <g fill="none" fill-rule="evenodd">
                                 <path d="M0 0h24v24H0z"></path>
                                 <g fill="#343434" transform="translate(4 1)">
                                    <path d="M17.81 1.055C17.81.473 17.333 0 16.762 0H1.048C.469 0 0 .46 0 1.046v19.908C0 21.532.466 22 1.043 22h10.48l1.048-1.048H1.048V1.048h15.714v15.714l1.048-1.065V1.055z"></path>
                                    <path d="M17.81 14.974v1.481L12.265 22h-1.482z"></path>
                                    <path d="M17.81 15.714h-5.248c-.573 0-1.038.473-1.038 1.038V22l1.047-1.048v-4.19h4.19l1.049-1.048z"></path>
                                    <rect width="10.083" height="1.4" x="3.667" y="4.583" rx=".7"></rect>
                                    <rect width="10.083" height="1.4" x="3.667" y="8.25" rx=".7"></rect>
                                    <rect width="10.083" height="1.4" x="3.667" y="11.917" rx=".7"></rect>
                                 </g>
                              </g>
                           </svg>
                        </div>
                        <div className="fela-142acw7">
                           <h4 className="fela-ikn578"><strong><span data-translation-id="funnel.register.pros.2.title">Be Unstoppable</span></strong></h4>
                           <p className="fela-9l9b0c"><span data-translation-id="funnel.register.pros.2.text">Easy, step-by-step instructions to help you chop, zest, roast, and serve like a pro.</span></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>);
    }
}
