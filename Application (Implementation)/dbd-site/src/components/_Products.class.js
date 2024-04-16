import React, { Component } from 'react';

class _Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [] // Initialize an empty array to hold the products
        };
    }

    componentDidMount() {
        // Fetch the products data from the server and update the state
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                this.setState({ products: data });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <h1>Products</h1>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default _Products;