import React from 'react';
import Featured from './Features';
import { connect } from 'react-redux';
import { addComment, editComment, deleteComment } from '../actions/commentActions';

class Board extends React.Component {

    addNew(text) {
        this.props.addComment(text);
    }

    removeComment(i) {
        this.props.deleteComment(i);
    }

    updateComment(newText, i) {
        this.props.editComment(i, newText);
    }

    eachComment(txt, i) {
        return (
            <Featured key={i} index={i}
                updateCommentText={this.updateComment.bind(this)}
                deleteFromBoard={this.removeComment.bind(this)}>{txt}</Featured>
        );
    }

    render() {
        return (
            <div className="container" style={{ float: 'left', display: 'inline-block', whiteSpace: 'nowrap' }}>
                <h3>Board of comments</h3>
                <hr />
                <button onClick={() => this.addNew("newww text")} className="btn btn-info">Add New</button>
                <hr />
                {this.props.comments.map(this.eachComment.bind(this))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    };
}

const mapDispatchToPropss = (dispatch) => {
    return {
        addComment: (newText) => {
            dispatch(addComment(newText))
        },
        editComment: (id, newText) => {
            dispatch(editComment(id, newText))
        },
        deleteComment: (id) => {
            dispatch(deleteComment(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToPropss)(Board);