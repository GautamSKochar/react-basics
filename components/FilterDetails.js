import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTextChange, updateInStockFlag } from '../actions/productActions';
import SearchBar from '../containers/SearchBar';
import ProductTable from '../containers/ProductTable';
import _ from 'lodash';

class FilterDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        };
        console.log("props are:", props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockFlagUpdate = this.handleInStockFlagUpdate.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.props.filterTextChange(filterText);
    }
    handleInStockFlagUpdate(flag) {
        this.props.updateInStockFlag(flag);
    }
    render() {
        return (
            <div>
                <h4>Filter Example</h4>
                <SearchBar onFilterChange={this.handleFilterTextChange}
                    onInStockChange={this.handleInStockFlagUpdate} />
                <div className="col-md-6">
                    <ProductTable products={this.props.products} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        filterText: state.products.filterText,
        inStockOnly: state.products.inStockOnly
    };
}

const mapDispachToProps = (dispatch) => {
    return {
        filterTextChange: (filterText) => {
            dispatch(filterTextChange(filterText))
        },
        updateInStockFlag: (flag) => {
            dispatch(updateInStockFlag(flag))
        }
    }
}
export default connect(mapStateToProps, mapDispachToProps)(FilterDetails)
connect(mapStateToProps)(ProductTable)
