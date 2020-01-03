import React from 'react';
import './App.css';
import CakeContainer from "./component/cake-container";
import {Provider} from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./component/hook-cake-container";
import IceCreamContainer from "./component/ice-cream-container";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer/>
          <HookCakeContainer/>
          <IceCreamContainer/>
        </div>
      </Provider>
  );
}

export default App;
