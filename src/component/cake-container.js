import React from "react";
import {buyCake} from "../redux/cake/cake-action";
import {connect} from "react-redux";
const CakeContainer = (props) => {

    /**
     * view of cake container page
     */
    return (
        <div>
            <h2>Number of cakes -  {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

/**
 * map redux state to props
 * @param state
 */
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
};

/**
 * map redux dispatch to props
 * @param dispatch
 * @returns {{buyCake: (function(): *)}}
 */
const mapDispatchToProps = dispatch => {

    return {
        buyCake: () => dispatch(buyCake())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
