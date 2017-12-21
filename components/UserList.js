import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/userListActions';

class UserList extends React.Component {
    render() {
        return (
            <div>
                <h3>User List</h3>
                <ul style={{ maxWidth: '40%', marginBottom: '20px' }}>
                    {this.props.usersList.map((user) => {
                        return (
                            <li key={user.id}
                                onClick={() => {
                                    this.props.selectUser(user)
                                }
                                }> {user.name}</li>
                        );
                    })}
                    {/* <li>One</li><li>Two</li><li>Three</li> */}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.userList
    };
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)