import {connect} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../redux/user-type/user-action";
import React from "react";
const UserContainer = (props) => {

    useEffect(() => {
        props.fetchUsers()
    }, []);

    return props.userData.loading ? (
        <h2>Loading</h2>
    ) : props.userData.error ? (
        <h2>{props.userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {props.userData &&
                props.userData.users &&
                props.userData.users.map(user => <p>{user.name}</p>)}
            </div>
        </div>
    )

};

const mapStateToProps = state => {
    return {
        userData: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
