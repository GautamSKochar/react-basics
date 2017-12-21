import React from 'react';
import ReactDOM from 'react-dom';

var panel = {
    marginBottom:'20px',
    fontSize:'12px',
    border:'1px solid transparent',
    borderColor: '#d6e9c6',
    borderRadius: '4px',
    boxShadow: '0 1px 1px rgba(0,0,0,.05)'
}
var panelHeading ={
    'padding': '10px 15px',
    'borderBottom': '1px solid transparent',
    'borderTopLeftRadius': '3px',
    'borderTopRightRadius': '3px',
    'color': '#3c763d',
    'backgroundColor': '#dff0d8',
    'borderColor': '#d6e9c6'
}

var panelBody ={
    padding: '15px'
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }

    componentDidMount() {
        this.props.promise.then(
            value => this.setState({ loading: false, data: value }),
            error => this.setState({ loading: false, error: error }));
    }

    render() {
        if (this.state.loading) {
            return <div style={{position:'fixed', top:'35%', left: '40%' }}><img src="../assets/loading.gif" alt="loading..."></img></div>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo,i) {
                return (

                    
                    <div key={i} className="panel panel-success" style={panel}>
                        <div className="panel-heading" style={panelHeading}>
                            <h4 className="panel-title"><a href={repo.html_url}>{repo.name}</a>&nbsp;&nbsp;&nbsp;({repo.stargazers_count} stars)</h4>
                        </div>
                        <div className="panel-body">
                            {repo.description}
                        </div>
                    </div>
                );
            });
            return (
                <main>
                    <h3>About Us...Random Dummy Data</h3>
                    <article>{repoList}</article>
                </main>
            );
        }


    }
}
export default About;