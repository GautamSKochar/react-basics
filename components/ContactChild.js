import React from 'react';

class ContactChild extends React.Component {
    constructor() {
        super();
        this.state = {
            // pageMounted: true,
            opacity: 1.0
        };
        console.log('Constructor');
    }

    componentWillMount() {
        console.log('Component will mount');
    };
    componentDidMount() {
        console.log('Component did mount');
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity = parseFloat(opacity) - .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
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

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        
        return (
            
            <div className="well" style={{marginLeft: '20px', }}>
                <h4>Child Component</h4><br/>
                <h5>Component Lifecycle Examples</h5>
                <section>Some dummy text...................</section>
                <div style={{ opacity: this.state.opacity }}>
                    <h5>Hello React...! Check Console for Component life cycle methods.</h5>
                </div>                
            </div>
        )
    }
}

export default ContactChild;