import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Card extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
    const plan = this.props.plan;

		return (
      <div className="card-classic-menu killa_card-1b7ahoa" role="button">
         <div>
            <div className="killa_card-1rc05p4">
               <div className="killa_card-13zzor3">
                  <div role="presentation" className="killa_card-158ekvj" style={{width: "300px", minHeight: "300px", backgroundColor: 'red'}}></div>
               </div>
            </div>
            <div className="killa_card-bndwob">
               <div className="killa_card-1m9jzd0">
                  <h2 className="killa_card-ae86jp killa_card-1k6y94c"><span data-translation-id="classic-menu-title">{plan.title}</span></h2>
                  <h3 className="killa_card-57twli killa_card-165qysq"><span className=""><span>{plan.price}</span> / <span data-translation-id="funnel.plans.cards.perServingLabel">serving</span></span></h3>
                  <p className="killa_card-1yszf0u"><span className="killa_card-1yszf0u"><span data-translation-id="funnel.plans.default.shipping-fee">{plan.shipping}</span></span></p>
               </div>
               <div className="killa_card-tmuzvm killa_card-9kwes0">
                  <div className="killa_card-12atkkn killa_card-cd0oom killa_card-zve67d">
                     <div className="killa_card-127224g">
                        <p className="killa_card-1qxxnk6"><span data-translation-id="funnel.plans.cards.sizeLabel">{plan.sizeLabel}</span></p>
                        <div className="killa_card-1x1nl4g killa_card-16lywy4">
                           <div className="killa_card-1cznd19">{plan.sizes_0}</div>
                           <div className="killa_card-v1g1ps">{plan.sizes_1}</div>
                        </div>
                     </div>
                  </div>
                  <div className="killa_card-12atkkn killa_card-1hcvonp killa_card-zve67d">
                     <div className="killa_card-1qjx1b4">
                        <p className="killa_card-1qxxnk6"><span data-translation-id="funnel.plans.cards.mealsLabel">{plan.mealsLabel}</span></p>
                        <div className="killa_card-1x1nl4g killa_card-16lywy4">
                           <div className="killa_card-mlwff0">{plan.meals_0}</div>
                           <div className="killa_card-ujer35">{plan.meals_1}</div>
                           <div className="killa_card-v1g1ps">{plan.meals_2}</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <div className="killa_card-1rc05p4">
                     <div>
                        <button className="killa_card-kuhth5 killa_card-vp90d" data-kind="green">
                          <span data-translation-id="funnel.plans.cards.cta">{plan.cta}</span>
                        </button>
                        <p className="killa_card-1dlkrlm">
                          <span data-translation-id="funnel.plans.classic-menu.description">{plan.description}</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
		);
	}
}
