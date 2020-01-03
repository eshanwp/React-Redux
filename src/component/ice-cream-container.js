import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyIceCream} from "../redux/ice-cream/ice-cream-action";

const IceCreamContainer = (props) => {

    /**
     *  This is a hook function. Hooks basically give function component.
     *  the ability to use local component state. It's equivalent to mapStateToProps function of cake-container.js
     *
     *  @Return: useSelector hook basically return what ever is return by this selector function
     */
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);

    /**
     * This is a hook function. dispatchHook which is use to dispatch an action with react-redux.
     *
     */
    const dispatch = useDispatch();

    /**
     * view of ice cream container page
     */
    return (
        <div>
            <h2>Number of ice cream -  {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    );
};

export default IceCreamContainer;
