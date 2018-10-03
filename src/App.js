import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { observable, computed, autorun, action, transaction } from 'mobx';


class GS25 {
  // @observable
  basket = [];

  // @computed
  get total() {
    console.log('계산중니다...')    
    return this.basket.reduce((prev, curr) => prev + curr.price, 0)
  }

  // @action
  select(name, price) {
    this.basket.push({ name, price });
  }
}
// @observable, @action, @computed 같은것은 annotation이 아니라 decorate문법이라고 한다.
// babel에서 셋팅을 하면 해당 문법을 사용할 있다. babel을 건드리려면 당연히 yarn eject를 해야하지만...
// - refer 1: https://www.robinwieruch.de/create-react-app-mobx-decorators/
// - refer 2: https://byseop.netlify.com/create-react-app-mobx/
// decorate(GS25, {
//   basket: observable,
//   total: computed,
//   select: action,
// });

const gs25 = new GS25();
autorun(() => gs25.total)
autorun(() => {
  if (gs25.basket.length > 0) {
    console.log(gs25.basket[gs25.basket.length - 1]);
  }
})

transaction(() => {
  gs25.select('물', 800)
  gs25.select('물', 800)
  gs25.select('포카칩', 1500)
})
console.log(gs25.total)



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
