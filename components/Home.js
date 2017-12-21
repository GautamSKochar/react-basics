import React from 'react';
import { connect } from 'react-redux';
import BlogPost from './BlogPost';
import { setName } from '../actions/userActions';

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.age,
            status: 0,
            homeLink: "MyHome",
            value: 'Type some *markdown* here!'
        };
        setTimeout(() => {
            this.setState({
                status: 1
            })
        }, 5000);
        this.handleChange = this.handleChange.bind(this);
        // this.age = props.age;
    }

    componentWillMount() {
        console.log('Component will mount');
    };
    componentDidMount() {
        console.log('Component did mount');
    };
    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props', nextProps);
    };
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component update', nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update', prevProps, prevState);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    onMakeOlder() {
        this.setState({
            age: parseInt(this.state.age) + 2
        })
        console.log(this.state.age);
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.user.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older</button>&nbsp;
                <button onClick={() => this.props.setName("Yuvi")} className="btn btn-primary">Change Name</button>&nbsp;
                
                <hr />
                <div className="MarkdownEditor">
                    <h3>Input</h3>
                    <textarea
                        rows="4" cols="30" style={{ overflow: 'hidden' }}
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                    <h3>Output</h3>
                    <div className="content">
                        <p className="content">{this.state.value}</p>
                    </div>
                </div>
                <hr/><h4>Reading data from json file:</h4>
<BlogPost />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) =>{
            dispatch(setName(name))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;