import React from 'react';
import ReactDOM from 'react-dom';

import { Store } from './components/store/store';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Search from './components/search/search';

const App = () => {

    return (
        <Store>
            <Search></Search>
            <Products></Products>
            <Cart></Cart>
        </Store>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));