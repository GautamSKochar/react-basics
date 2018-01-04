import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductCatRow extends React.Component {
    render() {
        return (
            <tr className="col-md-3">
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name :
            <span style={{ color: 'red' }}>{product.name}</span>
        return (
            <tr className="col-md-4">
                <td className="col-md-2">{name}</td>
                <td className="col-md-2">{product.price}</td>
            </tr>
        );
    }
}


class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
              }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCatRow category={product.category} key={product.category} />
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            )
            lastCategory = product.category;
        });
        return (
            <table className="table table-border">
                <thead>
                    <tr className="col-md-4">
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterText: state.products.filterText,
        inStockOnly: state.products.inStockOnly
    };
}

export default connect(mapStateToProps)(ProductTable)