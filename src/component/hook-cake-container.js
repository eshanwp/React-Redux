import React from "react";
import {useSelector} from "react-redux";
const HookCakeContainer = (props) => {

    /**
     *  This is a hook function. Hooks basically give function component.
     *  the ability to use local component state. It's equivalent to mapStateToProps function of cake-container.js
     *
     *  @Return: useSelector hook basically return what ever is return by this selector function
     */
    const numOfCakes = useSelector(state => state.numOfCakes);


    /**
     * view of cake container page
     */
    return (
        <div>
            <h2>Number of cakes -  {numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    );
};

export default HookCakeContainer;
