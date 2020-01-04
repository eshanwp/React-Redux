import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux/cake/cake-action";
const NewCakeContainer = (props) => {

    /**
     *  This is a hook function. Hooks basically give function component.
     *  the ability to use local component state. It's equivalent to mapStateToProps function of cake-container.js
     *
     *  @Return: useSelector hook basically return what ever is return by this selector function
     */
    const numOfCakes = useSelector(state => state.cake.numOfCakes);

    /**
     * This is a hook function. dispatchHook which is use to dispatch an action with react-redux.
     *
     */
    const dispatch = useDispatch();

    // Initial cake buy count
    const [number, setNumber] = useState(1);

    /**
     * view of cake container page
     */
    return (
        <div>
            <h2>Number of cakes -  {numOfCakes}</h2>
            <input type='text' value={number} onChange={ e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
        </div>
    );
};

export default NewCakeContainer;
