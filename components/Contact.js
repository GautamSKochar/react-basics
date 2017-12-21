import React from 'react';
import ContactChild from './ContactChild';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            pageMounted: true
        };
    }

    onChangePageMounted() {
        this.setState({
            pageMounted: !this.state.pageMounted
        });
    };
    render() {
        let pageCmp = "";
        if (this.state.pageMounted) {
            pageCmp = <div>
                <ContactChild/>
            </div>;
        }
        return (
            <div>
                <h3>Contact Us</h3><br/>
                {pageCmp}<br/>
                <div>
                    <button onClick={this.onChangePageMounted.bind(this)} className="btn btn-primary">(Un)Mount Child Component</button>
                </div>
            </div>
        )
    }
}

export default Contact;