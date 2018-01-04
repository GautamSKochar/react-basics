import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(e) {
        this.props.onFilterChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    render() {
        console.log(this.props);
        return (
            <form className="form">
                <div className="col-md-6">
                    <input className="form-control" type="text" placeholder="Search..."
                        value={this.props.filterText} onChange={this.handleFilterTextChange} />
                </div>
                <p>
                    <input style={{marginLeft:'10px'}} type="checkbox" 
                    checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange} />
                    {' '}Only show products in stock
                </p>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // products: state.products.products,
        filterText: state.products.filterText,
        inStockOnly: state.products.inStockOnly
    };
}

export default connect(mapStateToProps)(SearchBar)