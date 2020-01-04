import React from "react";
import {connect, useSelector} from "react-redux";
import {buyCake} from "../redux/cake/cake-action";
import {buyIceCream} from "../redux/ice-cream/ice-cream-action";

const ItemContainer = (props) => {

    /**
     * view of item container page. This page act as a parent component
     */
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <div>
                <button onClick={props.buyItem}>Buy Items</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
