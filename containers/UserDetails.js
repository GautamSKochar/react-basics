import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div></div>);
        }
        return (
            <div>
                <h2>User Details</h2>
                <img src={this.props.user.thumbnail} />
                <h3>{this.props.user.name}</h3>
                <h4>Description: {this.props.user.description}</h4>
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);