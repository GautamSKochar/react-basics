import React from 'react';
import TodoList from './TodoList';
import UserList from './UserList';
import UserDetail from '../containers/UserDetails';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNavigateHome = this.onNavigateHome.bind(this);
    }
    onNavigateHome() {
        console.log('Button clicked, go to root');
        this.props.history.push('/');
    };
    render() {
        const { match, location, history } = this.props
        return (
            <div>
                <h3>The User Page</h3>
                <hr />
                <p>Hello {this.props.name}</p>
                <p>User Id: {this.props.match.params.id}</p>
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
                <div>
                    <h3>TODO</h3>
                    {/* <TodoList /> */}
                    <TodoList items={this.state.items} />
                    <form>
                        <input className="form-control col-sm-3"
                            onChange={this.handleChange}
                            value={this.state.text}
                        /><br />
                        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </div>
                <hr />
                <div>
                    <UserList />
                    <hr />
                    <UserDetail />
                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        if (!this.state.text.length) return;
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}
export default User;