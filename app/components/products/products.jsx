import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../store/store';
import Product from '../product/product';

const Products = () => {
    const { products, getProducts, loading } = useContext(StoreContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            {loading ? 'Loading...' : products.map((product) => {
                return <Product key={product.id} product={product}></Product>
            })}
        </div>
    );
}

export default Products;