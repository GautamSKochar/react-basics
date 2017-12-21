import React from 'react';

var noteStyle = {
    'textDecoration': 'none',
    'color': '#999',
    'display': 'block',
    'height': '120px',
    'width': '260px',
    'padding': '1em',
    'MozBoxShadow': '5px 5px 7px #212121',
    'WebkitBoxShadow': '5px 5px 7px rgba(33, 33, 33, 0.7)',
    'boxShadow': '5px 5px 7px rgba(33, 33, 33, 0.7)',
    'MozTransition': '-moz-transform 0.15s linear',
    'OTransition': '-o-transform 0.15s linear',
    'WebkitTransition': '-webkit-transform 0.15s linear',
    'backgroundColor': 'aliceblue',
    'overflow':'auto'
};

var divContainer = {
    display: 'inline',
    float: 'left',
    maxWidth: '350px'
};

class Featured extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            editing: false
        }
    }
    onEdit() {
        this.setState({
            editing: true
        });
        console.log('changing state');
    }
    onRemove() {
        this.props.deleteFromBoard(this.props.index);
    }
    onCancel() {
        this.setState({ editing: false });
    }
    onSave(e) {
        this.props.updateCommentText(this.refs.nexText.value, this.props.index);
        this.setState({ 
            editing: false
        });
    }

    normalRender(){
        return (
            <div className="container" style={divContainer}>
                <div style={noteStyle} index={this.props.index}>{this.props.children}</div>
                <div className="btn-group" style={{ paddingTop: '5px', paddingLeft: '25px' }}>
                    <button id="editBtn" onClick={this.onEdit.bind(this)} className="btn btn-primary">Edit</button>
                    <button onClick={this.onRemove.bind(this)} className="btn btn-danger">Delete</button>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
    renderForm(){
        return (
            <div className="container" style={divContainer}>
                <textarea ref="nexText" rows="4" defaultValue={this.props.children}></textarea>
                <br/>
                <div className="btn-group" style={{ paddingTop: '5px', paddingLeft: '25px' }}>
                    <button onClick={this.onSave.bind(this)} className="btn btn-success">Save</button>
                    <button onClick={this.onCancel.bind(this)} className="btn btn-defalut">Cancel</button>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderForm.bind(this)();
        } else {
           return this.normalRender.bind(this)();
        }

    }
}

export default Featured;