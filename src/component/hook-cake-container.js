import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux/cake/cake-action";
const HookCakeContainer = (props) => {

    /**
     *  This is a hook function. Hooks basically give function component.
     *  the ability to use local component state. It's equivalent to mapStateToProps function of cake-container.js
     *
     *  @Return: useSelector hook basically return what ever is return by this selector function
     */
    const numOfCakes = useSelector(state => state.numOfCakes);

    /**
     * This is a hook function. dispatchHook which is use to dispatch an action with react-redux.
     *
     */
    const dispatch = useDispatch();

    /**
     * view of cake container page
     */
    return (
        <div>
            <h2>Number of cakes -  {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
};

export default HookCakeContainer;
