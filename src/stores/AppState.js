import { observable, action } from "mobx";
import { create, persist } from 'mobx-persist';
import axios from "axios";

import plans from "./plans";
import register from "./register";
import translations from "./translations";
import recipes from "./recipes";

const hydrate = create({})

export default class AppState {
  @persist('object') @observable user = {
    first_name: null,
    last_name: null,
    email: 'platica.ciprian@gmail.com',
    address: {
      country: 'RO',
      county: 'GL',
      city: 'GL',
      street: 'Dunarea',
      number: '1A',
      block: 'A6B',
      apartament: '9'
    }
  };
  @persist('object') @observable locales;
  @persist('map')    @observable recipes = recipes;

  @observable authenticated;
  @observable authenticating;
  @observable items;
  @observable item;
  @observable plans;

  @observable testval;

  constructor() {
    this.authenticated = false;
    this.authenticating = false;
    this.items = [];
    this.item = {};

    this.plans = plans;
    this.register = register;
    this.locales = translations;

    this.testval = "Cobbled together by ";
    console.log(this.testval, recipes);

    hydrate('AppState1', this)
      .then(() => console.log('App hydrated'))
  }

  async fetchData(pathname, id) {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com${pathname}`
    );
    console.log(data);
    data.length > 0 ? this.setData(data) : this.setSingle(data);
  }

  @action setData(data) {
    this.items = data;
  }

  @action setSingle(data) {
    this.item = data;
  }

  @action clearItems() {
    this.items = [];
    this.item = {};
  }

  @action authenticate() {
    return new Promise((resolve, reject) => {
      this.authenticating = true;
      setTimeout(() => {
        this.authenticated = this.authenticated;
        this.authenticating = false;
        resolve(this.authenticated);
      }, 0);
    });
  }

  @action updateUser(key, value){
    if(this.user.address.hasOwnProperty(key)) {
      this.user.address[key] = value;
    } else {
      this.user[key] = value;
    }
  }

  @action updateRecipe(id, key, value){
    console.log(id, key, value);
    let recipe = this.recipes[key];
    console.log('asd', recipe);
    recipe = value;
  }

  @action putRecipe(recipe){
    M.toast({html: `Ai adaugat reteta: ${recipe.title}`})
    this.recipes.set(this.recipes.length, recipe);
  }
}
