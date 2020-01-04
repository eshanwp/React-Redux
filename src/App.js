import React from 'react';
import './App.css';
import CakeContainer from "./component/cake-container";
import {Provider} from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./component/hook-cake-container";
import IceCreamContainer from "./component/ice-cream-container";
import NewCakeContainer from "./component/new-cake-container";
import ItemContainer from "./component/item-container";
import UserContainer from "./component/user-container";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer/>
          <HookCakeContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/>
          <ItemContainer iceCream/>
          <UserContainer/>
        </div>
      </Provider>
  );
}

export default App;
